import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import UserModel from "../../../../models/User.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const Parents = await UserModel.find({ userRole: "PARENTS" }).exec();
                res.status(201).json({ success: true, data: Parents });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}