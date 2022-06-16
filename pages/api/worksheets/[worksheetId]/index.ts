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
                const worksheet = await WorksheetModel.findById(worksheetId);
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
                const worksheet = await WorksheetModel.findByIdAndUpdate(worksheetId, req.body, {
                    new: true,
                    runValidators: true,
                });
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
                const deletedWorksheet = await WorksheetModel.deleteOne({ _id: worksheetId });
                if (!deletedWorksheet) {
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