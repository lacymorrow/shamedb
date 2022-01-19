import { NextApiRequest, NextApiResponse } from 'next';

import clientPromise from '../../../lib/mongodb';

const all = async (request: NextApiRequest, response: NextApiResponse) => {
  let lim = 0;
  let skip = 0;
  const {
    query: { limit, page },
  } = request;

  // Massage query params
  if (typeof limit === 'string') {
    lim = Number.parseInt(limit, 10);
  }
  if (typeof page === 'string') {
    skip = Number.parseInt(page, 10);
  }

  const client = await clientPromise;

  const posts = await client
    .db(process.env.MONGODB_DB)
    .collection('posts')
    .find({})
    .sort({ _id: 1 })
    .skip(skip > 0 ? (skip - 1) * lim : 0)
    .limit(lim)
    .toArray();

  response.json(posts);
};

export default all;
