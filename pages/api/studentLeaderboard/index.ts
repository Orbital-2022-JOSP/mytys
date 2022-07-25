import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import UserProfileModel from "../../../models/UserProfile.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const Users = await UserProfileModel.find({}).sort({ noOfPoints: "desc" }).limit(10);
                res.status(200).json({ success: true, data: Users });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}