import { NextApiRequest, NextApiResponse } from "next"
import QuestionAnswerModel from "../../../../../models/QuestionAnswer.model";
import dbConnect from '../../../../../dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { attemptId },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const questionAttempt = await QuestionAnswerModel
                    .findOne({
                        _id: {
                            $eq: attemptId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!questionAttempt) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionAttempt });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const questionAttempt = await QuestionAnswerModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: attemptId
                            }
                        },
                        req.body,
                        {
                            new: true,
                            runValidators: true,
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!questionAttempt) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionAttempt });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const questionAttempt = await QuestionAnswerModel
                    .findOneAndDelete(
                        {
                            _id: {
                                $eq: attemptId
                            }
                        },
                        {
                            deleted: true
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!questionAttempt) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionAttempt });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}