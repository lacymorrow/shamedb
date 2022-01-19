import { Meta } from '../components/Meta';
import Layout from '../templates/Home';
import config from '../utils/config';

const About = () => (
  <Layout
    meta={
      <Meta
        title={`About | ${config.title}: ${config.tagline}`}
        description={config.description}
      />
    }
  >
    <p>Why we name and shame.</p>
  </Layout>
);

export default About;
