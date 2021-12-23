import ContactForm from '../components/ContactForm';
import { Meta } from '../components/Meta';
import { ImageRotate } from '../styles/contact';
import { Alt } from '../templates/Alternative';

const About = () => {
  return (
    <Alt meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <div className="sm:table w-full">
        <ImageRotate
          index={Math.floor(Math.random() * 3)}
          className={`sm:table-cell sm:w-1/2 bg-cover min-h-[400px]`}
        ></ImageRotate>
        <div className="sm:table-cell w-full p-12 text-white font-bold mb-9">
          <h2 className="text-2xl mb-4">Contact us for more info</h2>
          <ContactForm />
        </div>
      </div>
    </Alt>
  );
};

export default About;
