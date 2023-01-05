import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import UserModel from '../../../models/User.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const Users = await UserModel.find({});
        res.status(200).json({ success: true, data: Users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(404).end();
      break;
  }
}
