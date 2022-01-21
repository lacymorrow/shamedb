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
    <p>
      We do not shame just anyone. Instead, we focus on <b>companies</b>,{' '}
      <b>politicians</b>, and <b>police officers</b>. We shame public entities
      that <b>abuse their positions of power</b>.
    </p>
  </Layout>
);

export default About;
