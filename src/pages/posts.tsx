import { Meta } from '../components/Meta';
import { getAllPosts } from '../lib/posts';
import Layout from '../templates/Home';
import config from '../utils/config';

const Posts = (props: { posts: any }) => (
  <Layout
    meta={
      <Meta
        title={`Posts | ${config.title}: ${config.tagline}`}
        description={config.description}
      />
    }
  >
    <div>
      <p>
        {props.posts?.map((post: any, key: string) => {
          return <div key={key}>{post.entity}</div>;
        })}
      </p>
    </div>
  </Layout>
);

export default Posts;

export const getServerSideProps = async (_: any) => {
  const posts = await getAllPosts();
  console.log(posts);
  return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
};
