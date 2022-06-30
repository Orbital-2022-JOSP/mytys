import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../../../../dbConnect';
import QuestionAnswerModel from '../../../../../../../models/QuestionAnswer.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { userId, questionId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const questionAnswer = await QuestionAnswerModel
                    .findOne({
                        user: {
                            $eq: userId
                        },
                        question: {
                            $eq: questionId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!QuestionAnswerModel) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionAnswer });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            res.status(200).json({})
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}