import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import MCQOptionModel from "../../../models/MCQOption.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const mcqOptions = await MCQOptionModel.find({});
                res.status(201).json({ success: true, data: mcqOptions });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const mcqOption = await MCQOptionModel.create(
                    sanitize(req.body)
                );
                res.status(201).json({ success: true, data: mcqOption });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}