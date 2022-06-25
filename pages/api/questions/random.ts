import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../dbConnect";
import QuestionModel from "../../../models/Question.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const question = await QuestionModel.findOne({});
                res.status(201).json({ success: true, data: question });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}