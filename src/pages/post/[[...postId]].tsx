import { useRouter } from 'next/router';

import clientPromise from '../../lib/mongodb';

export default function Posts() {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <div>
      <h1>Post</h1>
      <ul>{postId}</ul>
    </div>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;

  const posts = await client
    .db(process.env.MONGODB_DB)
    .collection('posts')
    .find({})
    .limit(20)
    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
