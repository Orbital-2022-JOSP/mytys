import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import WorkdocModel from "../../../models/Workdoc.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const workdocs = await WorkdocModel.find({});
                res.status(201).json({ success: true, data: workdocs });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const newWorkdoc = await WorkdocModel.create(
                    sanitize(req.body)
                );
                res.status(201).json({ success: true, data: newWorkdoc });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}