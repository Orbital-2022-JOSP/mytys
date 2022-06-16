import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../../dbConnect';
import QuestionAnswerModel from "../../../../../models/QuestionAnswer.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const questionAttempts = await QuestionAnswerModel.find({});
                res.status(201).json({ success: true, data: questionAttempts });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const newQuestionAttempt = await QuestionAnswerModel.create(req.body);
                res.status(201).json({ success: true, data: newQuestionAttempt });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}