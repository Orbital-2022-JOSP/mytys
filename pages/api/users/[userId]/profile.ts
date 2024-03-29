import sanitize from 'mongo-sanitize';
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import UserProfileModel from '../../../../models/UserProfile.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { userId },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const UserProfile = await UserProfileModel.findOne({
          _id: {
            $eq: userId,
          },
        })
          .setOptions({ sanitizeFilter: true })
          .exec();
        res.status(200).json({ success: true, data: UserProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const UserProfile = await UserProfileModel.findOneAndUpdate(
          {
            _id: {
              $eq: userId,
            },
          },
          sanitize(req.body),
          {
            new: true,
            runValidators: true,
          },
        ).setOptions({ sanitizeFilter: true });
        if (!UserProfile) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: UserProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(404).end();
      break;
  }
}
