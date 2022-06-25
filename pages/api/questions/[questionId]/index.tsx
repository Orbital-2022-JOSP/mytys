import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import MCQQuestionModel from "../../../../models/MCQQuestion.model";
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
                    .populate({ path: 'questionTopics', model: QuestionTopicModel })
                    .populate({ path: 'questionTypes', model: QuestionTypeModel })
                    .populate({ path: 'mcqQuestions', model: MCQQuestionModel });
                    
                res.status(201).json({ success: true, data: question });
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}