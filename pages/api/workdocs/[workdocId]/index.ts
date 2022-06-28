import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from '../../../../dbConnect';
import WorkdocModel from "../../../../models/Workdoc.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { workdocId },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const workdoc = await WorkdocModel
                    .find({
                        _id: {
                            $eq: workdocId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!workdoc) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: workdoc });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const workdoc = await WorkdocModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: workdocId
                            }
                        },
                        req.body,
                        {
                            new: true,
                            runValidators: true,
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!workdoc) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: workdoc });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const workdoc = await WorkdocModel
                    .findOneAndDelete(
                        {
                            _id: {
                                $eq: workdocId
                            }
                        },
                        {
                            deleted: true
                        },
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!workdoc) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: workdoc });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}