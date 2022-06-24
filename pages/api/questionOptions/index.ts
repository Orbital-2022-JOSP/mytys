import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../dbConnect";
import MCQQuestionOptionModel from "../../../models/MCQQuestionOption.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const Questions = await MCQQuestionOptionModel.find({});
                res.status(201).json({ success: true, data: Questions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const Questions = await MCQQuestionOptionModel.create(req.body);
                res.status(201).json({ success: true, data: Questions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}