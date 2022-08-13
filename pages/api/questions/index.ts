import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import MCQOptionModel from "../../../models/MCQOption.model";
import QuestionModel from "../../../models/Question.model";
import QuestionTopicModel from "../../../models/QuestionTopic.model";
import QuestionTypeModel from "../../../models/QuestionType.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const questions = await QuestionModel
                    .find({})
                    .populate({
                        path: 'questionTopics',
                        model: QuestionTopicModel
                    })
                    .populate({
                        path: 'questionTypes',
                        model: QuestionTypeModel
                    })
                res.status(200).json({ success: true, data: questions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            const questionData = sanitize(req.body);

            if (questionData.questionType == "mcq") {
                const mcqCorrectAnswer = questionData.mcqCorrectAnswer;
                const mcqOptions = questionData.mcqOptions;
                delete questionData.mcqCorrectAnswer;
                delete questionData.mcqOptions;

                try {
                    const newQuestion = new QuestionModel(questionData)
                    const newCorrectMCQOption = await MCQOptionModel.create({
                        questionId: newQuestion._id,
                        text: mcqCorrectAnswer.text
                    })

                    const filteredOptions = mcqOptions.filter((x) => x.text != newCorrectMCQOption.text).map((x) => ({
                        ...x,
                        questionId: newQuestion._id
                    }));

                    const newOtherOptions = await MCQOptionModel.insertMany(filteredOptions)
                    const optionsIds = newOtherOptions.map((x) => x._id)
                    optionsIds.push(newCorrectMCQOption._id);

                    newQuestion.mcqCorrectAnswer = newCorrectMCQOption._id;
                    newQuestion.mcqOptions = optionsIds;
                    await newQuestion.save();

                    res.status(201).json({ success: true, data: newQuestion });
                } catch (error) {
                    console.log(error)
                    let errors = {};
                    if (error.name === "ValidationError") {
                        Object.keys(error.errors).forEach((key) => {
                            errors[key] = error.errors[key].message;
                        });
                    }
                    res.status(400).json({ success: false, errors: errors });
                }
            } else {
                try {
                    const newQuestion = await QuestionModel.create(
                        questionData
                    );
                    res.status(201).json({ success: true, data: newQuestion });
                } catch (error) {
                    let errors = {};
                    if (error.name === "ValidationError") {
                        Object.keys(error.errors).forEach((key) => {
                            errors[key] = error.errors[key].message;
                        });
                    }
                    res.status(400).json({ success: false, errors: errors });
                }
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}