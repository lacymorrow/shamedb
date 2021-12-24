import { useState } from 'react';

import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { BlurhashCanvas } from 'react-blurhash';

import ContactForm from '../components/ContactForm';
import { Meta } from '../components/Meta';
import { ImageRotate } from '../styles/contact';
import { Alt } from '../templates/Alternative';
import config from '../utils/config';
import { generateRandom, incrementNumber } from '../utils/utils';

const About = (props: any) => {
  const [imageIndex, setImageIndex] = useState(props.imageIndex);
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = `/assets/images/shots/${imageIndex}.jpg`;

  return (
    <Alt
      meta={
        <Meta
          title={`Contact | ${config.title}: ${config.tagline}`}
          description={config.description}
        />
      }
    >
      <div className="sm:table w-full">
        <div className="sm:table-cell sm:w-1/2 min-h-[400px] relative">
          <ImageRotate
            className="w-full h-full absolute"
            active={imageLoaded}
            onClick={() => {
              setImageLoaded(false);
              setImageIndex(incrementNumber(imageIndex, config.shotsCount));
            }}
          >
            {props.imageIndex === imageIndex && (
              <BlurhashCanvas
                {...props.blurDataURL}
                punch={1}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
            <Image
              alt=""
              src={image}
              priority={true}
              sizes="50vw"
              objectFit="cover"
              blurDataURL={props.blurDataURL}
              height="100%"
              width="100%"
              className="w-full h-full absolute transition duration-1000"
              layout="responsive"
              onLoad={() => {
                setImageLoaded(true);
              }}
            />{' '}
          </ImageRotate>
        </div>
        <div className="sm:table-cell w-full p-12 text-white font-bold mb-9">
          <h2 className="text-2xl mb-4">Contact us for more info</h2>
          <ContactForm />
        </div>
      </div>
    </Alt>
  );
};

export const getStaticProps = async () => {
  const imageIndex = generateRandom(config.shotsCount);
  const image = `/assets/images/shots/${imageIndex}.jpg`;
  const { blurhash } = await getPlaiceholder(image);
  // const svgData = `data:image/svg+xml;base64,${btoa(svg.toString())}`;

  return {
    props: {
      imageIndex,
      image,
      blurDataURL: blurhash,
    },
  };
};

export default About;
