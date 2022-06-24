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
                const questionTopic = await QuestionTopicModel.findById(questionTopicId);
                if (!QuestionTopicModel) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionTopic });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const questionTopic = await QuestionTopicModel.findByIdAndUpdate(questionTopicId, req.body, {
                    new: true,
                    runValidators: true,
                });
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
                const deletedQuestionTopic = await QuestionTopicModel.deleteOne({ _id: questionTopicId });
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