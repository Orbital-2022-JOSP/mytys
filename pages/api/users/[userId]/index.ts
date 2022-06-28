import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import UserModel from "../../../../models/User.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { userId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const User = await UserModel
                    .findById(userId)
                    .setOptions({ sanitizeFilter: true })
                    .exec();
                res.status(201).json({ success: true, data: User });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const User = await UserModel
                    .findByIdAndUpdate(
                        userId,
                        req.body,
                        {
                            new: true,
                            runValidators: true,
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!User) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: User })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}