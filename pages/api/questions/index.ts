import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../dbConnect";
import QuestionModel from "../../../models/Question.model";
import QuestionTopicModel from "../../../models/QuestionTopic.model";
import QuestionTypeModel from "../../../models/QuestionType.model";
import sanitize from 'mongo-sanitize';
import MCQOptionModel from "../../../models/MCQOption.model";

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
                res.status(201).json({ success: true, data: questions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            const { body } = sanitize(req.body);

            if (body.mcqCorrectAnswer && body.mcqOptions) {
                try {
                    const mcqCorrectAnswer = body.mcqCorrectAnswer;
                    const mcqOptions = body.mcqOptions;

                    delete body.mcqCorrectAnswer;
                    delete body.mcqOptions;

                    const newQuestion = new QuestionModel(body)
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
                    newQuestion.save();

                    res.status(201).json({ success: true, data: newQuestion });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            } else {
                try {
                    const newQuestion = await QuestionModel.create(
                        sanitize(req.body)
                    );
                    res.status(201).json({ success: true, data: newQuestion });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}