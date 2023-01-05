import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import MCQOptionModel from '../../../../models/MCQOption.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { questionOptionId },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const mcqOption = await MCQOptionModel.findOne({
          _id: {
            $eq: questionOptionId,
          },
        }).setOptions({ sanitizeFilter: true });
        if (!mcqOption) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: mcqOption });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const mcqOption = await MCQOptionModel.findOneAndUpdate(
          {
            _id: {
              $eq: questionOptionId,
            },
          },
          sanitize(req.body),
          {
            new: true,
            runValidators: true,
          },
        ).setOptions({ sanitizeFilter: true });
        if (!mcqOption) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: mcqOption });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedMCQOption = await MCQOptionModel.deleteOne({
          _id: {
            $eq: questionOptionId,
          },
        }).setOptions({ sanitizeFilter: true });
        if (!deletedMCQOption) {
          return res.status(404).json({ success: false });
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
