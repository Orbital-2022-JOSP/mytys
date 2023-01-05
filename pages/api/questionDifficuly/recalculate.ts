import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../lib/dbConnect';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      const { authToken } = req.body;

      // Check the auth token to make sure that is authorized.
      if (authToken == process.env.AUTH_KEY) {
        try {
          res.status(200).json({ success: true });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else {
        res.status(401).json({ success: false });
      }

      break;

    default:
      res.status(404).end();
      break;
  }
}
