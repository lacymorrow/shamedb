// Validate that post is not duplicate
import { NextApiRequest, NextApiResponse } from 'next';

import clientPromise from '../../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const client = await clientPromise;

    const post = await client
      .db(process.env.MONGODB_DB)
      .collection('posts')
      .insertOne({
        timeCreated: Date.now(),
        timeUpdated: Date.now(),
        ...req.body,
      });

    console.log(post);

    return res
      .status(200)
      .json({ message: 'Your message was sent, thanks for reaching out  🚀' });
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

export default handler;
