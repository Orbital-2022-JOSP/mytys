import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import CourseModel from "../../../models/Course.model";
import UserModel from '../../../models/User.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const courses = await CourseModel
                .find({})
                .populate({
                    path: "author",
                    model: UserModel
                });
                res.status(201).json({ success: true, data: courses });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const newCourse = await CourseModel.create(
                    sanitize(req.body)
                );
                res.status(201).json({ success: true, data: newCourse });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(404).end();
            break;
    }
}