import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import QuestionTypeModel from '../../../models/QuestionType.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const questionTypes = await QuestionTypeModel.find({});
        res.status(200).json({ success: true, data: questionTypes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const questionType = await QuestionTypeModel.create(sanitize(req.body));
        res.status(201).json({ success: true, data: questionType });
      } catch (error) {
        let errors = {};
        if (error.name === 'ValidationError') {
          Object.keys(error.errors).forEach(key => {
            errors[key] = error.errors[key].message;
          });
        }
        res.status(400).json({ success: false, errors: errors });
      }
      break;

    default:
      res.status(404).end();
      break;
  }
}
