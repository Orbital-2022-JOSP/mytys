import { NextApiRequest, NextApiResponse } from "next"
import dbConnect from '../../../../dbConnect';
import WorksheetModel from "../../../../models/Worksheet.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { worksheetId },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const worksheet = await WorksheetModel
                    .find({
                        _id: {
                            $eq: worksheetId
                        }
                    })
                    .setOptions({ sanitizeFilter: true });
                if (!worksheet) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: worksheet });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT' /* Edit a model by its ID */:
            try {
                const worksheet = await WorksheetModel
                    .findOneAndUpdate(
                        {
                            _id: {
                                $eq: worksheetId
                            }
                        },
                        req.body,
                        {
                            new: true,
                            runValidators: true,
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!worksheet) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: worksheet });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const worksheet = await WorksheetModel
                    .findOneAndDelete(
                        {
                            _id: {
                                $eq: worksheetId
                            }
                        },
                        {
                            deleted: true
                        }
                    )
                    .setOptions({ sanitizeFilter: true });
                if (!worksheet) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: worksheet });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}