import { MongoError, ObjectId } from 'mongodb';

import clientPromise from './mongodb';

export const addPost = async (props: {}) => {
  const client = await clientPromise;

  const post = await client
    .db(process.env.MONGODB_DB)
    .collection('posts')
    .insertOne(
      {
        timeCreated: Date.now(),
        timeUpdated: Date.now(),
        ...props,
      },
      (error: MongoError) => {
        if (error) {
          return false;
        }
        return true;
      }
    );

  return post;
};

export const getAllPostsPaginated = async ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) => {
  const client = await clientPromise;

  const posts = await client
    .db(process.env.MONGODB_DB)
    .collection('posts')
    .find({})
    .sort({ $natural: -1 })
    .skip(skip > 0 ? (skip - 1) * limit : 0)
    .limit(limit)
    .toArray();

  return posts;
};

export const getAllPosts = () => getAllPostsPaginated({ limit: 0, skip: 0 });

export const getAllPostIds = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post: any) => {
    // eslint-disable-next-line no-underscore-dangle
    return post._id.toString();
  });
  return paths;
};

export const getFirstPost = async () => {
  const client = await clientPromise;

  const post = await client
    .db(process.env.MONGODB_DB)
    .collection('posts')
    .findOne({}, { sort: { $natural: -1 } });
  return post;
};

export const getPost = async (postId: string | string[]) => {
  // Return a single document with a given postId
  let id;
  const client = await clientPromise;

  try {
    if (!postId) {
      throw new Error('Invalid postId');
    }
    if (typeof postId === 'object') {
      [id] = postId;
    } else {
      id = postId;
    }

    const oId = new ObjectId(id);

    const post = await client
      .db(process.env.MONGODB_DB)
      .collection('posts')
      .findOne({ _id: oId });

    return post;
  } catch (error) {
    return null;
  }
};
