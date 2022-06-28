import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import MCQQuestionOptionModel from "../../../../models/MCQQuestionOption.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { questionOptionId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const MCQQuestionOption = await MCQQuestionOptionModel
                    .findById(questionOptionId)
                    .setOptions({ sanitizeFilter: true });
                if (!MCQQuestionOptionModel) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: MCQQuestionOption });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const MCQQuestionOption = await MCQQuestionOptionModel
                    .findByIdAndUpdate(
                        questionOptionId,
                        req.body,
                        {
                            new: true,
                            runValidators: true,
                        })
                    .setOptions({ sanitizeFilter: true });
                if (!MCQQuestionOption) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: MCQQuestionOption });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedMCQQuestionOption = await MCQQuestionOptionModel
                    .deleteOne({ _id: questionOptionId })
                    .setOptions({ sanitizeFilter: true });
                if (!deletedMCQQuestionOption) {
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