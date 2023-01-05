import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import QuestionModel from '../../../models/Question.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const questionCount = await QuestionModel.count().exec();
        const randomOffset = Math.floor(Math.random() * questionCount);
        const question = await QuestionModel.findOne({})
          .select('_id')
          .skip(randomOffset)
          .exec();
        res.status(200).json({ success: true, data: question });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(404).end();
      break;
  }
}
