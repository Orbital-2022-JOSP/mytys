import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../../../dbConnect';
import MCQQuestionModel from "../../../../../../models/MCQQuestion.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { questionTopic },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const Questions = await MCQQuestionModel.find({ questionTopic: questionTopic }).exec();
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