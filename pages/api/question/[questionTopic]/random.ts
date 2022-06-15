import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import QuestionModel from "../../../../models/Question.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { questionTopic },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const Questions = await QuestionModel.findOne({ questionTopic: questionTopic });
                res.status(201).json({ success: true, data: Questions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}