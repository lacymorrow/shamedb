import { useState, useEffect } from 'react';

import ContactForm from '../components/ContactForm';
import { Meta } from '../components/Meta';
import { ImageRotate } from '../styles/contact';
import { Alt } from '../templates/Alternative';
import { AppConfig } from '../utils/AppConfig';

const About = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 3));
  }, []);
  return (
    <Alt
      meta={
        <Meta
          title={`Contact | ${AppConfig.title}`}
          description={AppConfig.tagline}
        />
      }
    >
      <div className="sm:table w-full">
        <ImageRotate
          index={randomNumber}
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
