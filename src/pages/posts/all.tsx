/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';

import Meta from '../../components/Meta';
import { getAllPosts } from '../../lib/posts';
import { PostWrapper } from '../../styles/post';
import Layout from '../../templates/MainLayout';
import config from '../../utils/config';

const Posts = (props: { posts: any }) => (
  <Layout
    meta={
      <Meta
        title={`All Posts | ${config.title}: ${config.tagline}`}
        description={config.description}
      />
    }
  >
    <div>
      <p>
        {props.posts?.map((post: any, key: string) => {
          return (
            <PostWrapper key={key}>
              <Link href={`/post/${post._id}`}>
                <a className="block w-100 p-4">
                  {post.thumbnail && (
                    <div className="relative h-12 w-12">
                      <Image src={post.thumbnail} layout="fill" />
                    </div>
                  )}
                  <h3>
                    {post.entity || (
                      <span>
                        <b>Victim:</b> {post.victim}
                      </span>
                    )}
                  </h3>
                  {post.entity && post.victim && (
                    <h4>
                      <b>Victim:</b> {post.victim}
                    </h4>
                  )}
                  <p className="app-text-unimportant">{post.timeDate}</p>
                </a>
              </Link>
            </PostWrapper>
          );
        })}
      </p>
    </div>
  </Layout>
);

export default Posts;

export const getServerSideProps = async (_: any) => {
  try {
    const posts = await getAllPosts();
    return { props: { posts } };
  } catch (error) {
    return { notFound: true };
  }
};
