import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import MCQQuestionModel from "../../../../models/MCQQuestion.model";
import QuestionModel from "../../../../models/Question.model";

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
                // Something might go wrong if the question model creates successfully but the mcq question doesn't 
                // Then you have a floating question object in db.
                const mcqQuestion = await MCQQuestionModel.create({
                    questionId: question._id,
                    ...mcqQuestionBody
                })
                res.status(201).json({ success: true, data: mcqQuestion });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}