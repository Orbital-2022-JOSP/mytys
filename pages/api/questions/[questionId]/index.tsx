import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import MCQQuestionModel from "../../../../models/MCQQuestion.model";
import MCQQuestionOptionModel from "../../../../models/MCQQuestionOption.model";
import QuestionModel from "../../../../models/Question.model";
import QuestionTopicModel from "../../../../models/QuestionTopic.model";
import QuestionTypeModel from "../../../../models/QuestionType.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { questionId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const question = await QuestionModel
                    .findOne({ _id: questionId })
                    .populate({
                        path: 'questionTopics',
                        model: QuestionTopicModel
                    })
                    .populate({
                        path: 'questionTypes',
                        model: QuestionTypeModel
                    })
                    .populate({
                        path: 'mcqQuestions',
                        model: MCQQuestionModel,
                        populate: [
                            {
                                path: 'correctAnswer',
                                model: MCQQuestionOptionModel
                            },
                            {
                                path: 'options',
                                model: MCQQuestionOptionModel
                            }
                        ]
                    })
                    .setOptions({ sanitizeFilter: true });

                res.status(201).json({ success: true, data: question });
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedQuestion = await QuestionModel
                    .deleteOne({ _id: questionId })
                    .setOptions({ sanitizeFilter: true });
                if (!deletedQuestion) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}