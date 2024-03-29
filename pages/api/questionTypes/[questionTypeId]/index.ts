import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import QuestionTypeModel from '../../../../models/QuestionType.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { questionTypeId },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const questionType = await QuestionTypeModel.findOne({
          _id: {
            $eq: questionTypeId,
          },
        }).setOptions({ sanitizeFilter: true });
        if (!questionType) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: questionType });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const questionType = await QuestionTypeModel.findOneAndUpdate(
          {
            _id: {
              $eq: questionTypeId,
            },
          },
          sanitize(req.body),
          {
            new: true,
            runValidators: true,
          },
        ).setOptions({ sanitizeFilter: true });
        if (!questionType) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: questionType });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedQuestionType = await QuestionTypeModel.deleteOne({
          _id: {
            $eq: questionTypeId,
          },
        }).setOptions({ sanitizeFilter: true });
        if (!deletedQuestionType) {
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
