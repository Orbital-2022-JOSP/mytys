import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../../lib/dbConnect';
import QuestionModel from '../../../../../models/Question.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { questionType },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const Questions = await QuestionModel.findOne({
          questionTypes: {
            $eq: questionType,
          },
        })
          .setOptions({ sanitizeFilter: true })
          .exec();
        res.status(200).json({ success: true, data: Questions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(404).end();
      break;
  }
}
