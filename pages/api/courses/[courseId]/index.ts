import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import CourseModel from '../../../../models/Course.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { courseId },
        method,
    } = req

    await dbConnect();

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const course = await CourseModel
                    .findOne({
                        _id: {
                            $eq: courseId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!course) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: course });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const course = await CourseModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: courseId
                            }
                        },
                        sanitize(req.body),
                        {
                            new: true,
                            runValidators: true,
                        })
                    .setOptions({ sanitizeFilter: true });
                if (!course) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: course });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedCourse = await CourseModel
                    .deleteOne({
                        _id: {
                            $eq: courseId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!deletedCourse) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}