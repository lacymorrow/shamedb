import { Meta } from '../components/Meta';
import Layout from '../templates/Home';
import config from '../utils/config';
import currentUrl from '../utils/currentUrl';

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

export async function getServerSideProps(_: any) {
  const res = await fetch(`${currentUrl}/api/posts/all`);
  const posts = await res.json();
  return { props: { posts } };
}
