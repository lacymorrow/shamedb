import ContactForm from '../components/ContactForm';
import { Meta } from '../components/Meta';
import { Alt } from '../templates/Alternative';

const About = () => (
  <Alt meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h2>Contact FLY5</h2>
    <ContactForm />
  </Alt>
);

export default About;
