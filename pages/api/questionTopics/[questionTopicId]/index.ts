import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import QuestionTopicModel from "../../../../models/QuestionTopic.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { questionTopicId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const questionTopic = await QuestionTopicModel
                    .findOne({
                        _id: {
                            $eq: questionTopicId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!questionTopic) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionTopic });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const questionTopic = await QuestionTopicModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: questionTopicId
                            }
                        },
                        sanitize(req.body),
                        {
                            new: true,
                            runValidators: true,
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!questionTopic) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionTopic });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedQuestionTopic = await QuestionTopicModel
                    .deleteOne({
                        _id: {
                            $eq: questionTopicId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!deletedQuestionTopic) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}