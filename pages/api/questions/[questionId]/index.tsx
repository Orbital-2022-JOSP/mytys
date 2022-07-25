import sanitize from "mongo-sanitize";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../lib/dbConnect';
import MCQOptionModel from "../../../../models/MCQOption.model";
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
                    .findOne({
                        _id: {
                            $eq: questionId
                        }
                    })
                    .populate({
                        path: 'questionTopics',
                        model: QuestionTopicModel
                    })
                    .populate({
                        path: 'questionTypes',
                        model: QuestionTypeModel
                    })
                    .populate({
                        path: 'mcqCorrectAnswer',
                        model: MCQOptionModel
                    })
                    .populate({
                        path: 'mcqOptions',
                        model: MCQOptionModel
                    })
                    .setOptions({ sanitizeFilter: true });

                res.status(200).json({ success: true, data: question });
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            const body = sanitize(req.body);

            delete body.questionType;
            delete body.mcqCorrectAnswer;
            delete body.mcqOptions;
            delete body.oeCorrectAnswer;

            try {
                const question = await QuestionModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: questionId
                            }
                        },
                        body,
                        {
                            new: true,
                            runValidators: true,
                        })
                    .setOptions({ sanitizeFilter: true });
                if (!question) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json({ success: true, data: question });
            } catch (error) {
                let errors = {};
                if (error.name === "ValidationError") {
                    Object.keys(error.errors).forEach((key) => {
                        errors[key] = error.errors[key].message;
                    });
                }
                res.status(400).json({ success: false, errors: errors });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedQuestion = await QuestionModel
                    .deleteOne({
                        _id: {
                            $eq: questionId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!deletedQuestion) {
                    return res.status(404).json({ success: false });
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