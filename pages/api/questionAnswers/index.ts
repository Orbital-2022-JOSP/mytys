import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../dbConnect";
import QuestionAnswerModel from "../../../models/QuestionAnswer.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const questionAnswers = await QuestionAnswerModel.find({});
                res.status(201).json({ success: true, data: questionAnswers });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const questionAnswer = await QuestionAnswerModel.create(req.body);
                res.status(201).json({ success: true, data: questionAnswer });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}