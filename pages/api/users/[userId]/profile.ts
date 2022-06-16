import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import UserProfileModel from "../../../../models/UserProfile.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { userId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const UserProfile = await UserProfileModel.findById(userId).exec();
                res.status(201).json({ success: true, data: UserProfile });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const UserProfile = await UserProfileModel.findByIdAndUpdate(userId, req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!UserProfile) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: UserProfile })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}