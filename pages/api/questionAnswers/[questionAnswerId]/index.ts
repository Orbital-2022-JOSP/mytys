import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import QuestionAnswerModel, { IQuestionAnswer } from "../../../../models/QuestionAnswer.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { questionAnswerId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const questionAnswer = await QuestionAnswerModel
                    .findOne({
                        _id: {
                            $eq: questionAnswerId
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
            break;

        case 'PUT' /* Edit a model by its ID */:
            const data: IQuestionAnswer = {
                user: req.body.user,
                question: req.body.question,
                score: req.body.question,
                MCQAnswer: req.body.MCQAnswer,
                OpenEndedAnswer: req.body.OpenEndedAnswer,
            }
            try {
                const questionAnswer = await QuestionAnswerModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: questionAnswerId
                            }
                        },
                        data,
                        {
                            new: true,
                            runValidators: true
                        }
                    ).setOptions({ sanitizeFilter: true });
                if (!questionAnswer) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: questionAnswer });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedQuestionAnswer = await QuestionAnswerModel
                    .deleteOne({
                        _id: {
                            $eq: questionAnswerId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!deletedQuestionAnswer) {
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