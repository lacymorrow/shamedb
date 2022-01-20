import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getAllPostIds, getPost } from '../../lib/posts';

export default function Posts({ post }: any) {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <div>
      <h1>Post</h1>
      <p>{post}</p>
      <ul>{postId}</ul>
    </div>
  );
}

export async function getStaticPaths() {
  const ids = await getAllPostIds();
  const paths = ids.map((postId: string) => {
    return { params: { postId: [postId] } };
  });
  return { paths, fallback: 'blocking' };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Invalid or missing postId
  if (!params?.postId) {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }
  const post = await getPost(params.postId);

  // No post found
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: JSON.stringify(post),
    },
    revalidate: 10, // in seconds
  };
};
