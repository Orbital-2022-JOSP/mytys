import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import MCQQuestionModel from "../../../../models/MCQQuestion.model";
import MCQQuestionOptionModel from "../../../../models/MCQQuestionOption.model";
import QuestionModel from "../../../../models/Question.model";

interface mcqQuestionBodySchema {
    correctAnswer: {
        text: string
    },
    options: [{
        text: string
    }]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const Questions = await MCQQuestionModel.find({});
                res.status(201).json({ success: true, data: Questions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            const { questionBody, mcqQuestionBody } = req.body;
            try {
                const question = await QuestionModel.create(questionBody);

                const mcqQuestionBodyTypeSafe: mcqQuestionBodySchema = mcqQuestionBody
                const options = mcqQuestionBodyTypeSafe.options;
                const correctOption = mcqQuestionBodyTypeSafe.correctAnswer;

                const asd = await MCQQuestionOptionModel.create({
                    questionId: question._id,
                    text: correctOption.text
                })

                const filteredOptions = options.filter((x) => x.text != correctOption.text).map((x) => ({
                    ...x,
                    questionId: question._id
                }));

                const qwe = await MCQQuestionOptionModel.insertMany(filteredOptions)

                const allOptionsId = qwe.map(x => x._id)
                allOptionsId.push(asd._id);

                // Something might go wrong if the question model creates successfully but the mcq question doesn't 
                // Then you have a floating question object in db.
                const mcqQuestion = await MCQQuestionModel.create({
                    questionId: question._id,
                    correctAnswer: asd._id,
                    options: allOptionsId
                })
                res.status(201).json({ success: true, data: mcqQuestion });
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}