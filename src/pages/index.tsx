import { useEffect, useState } from 'react';

import Link from 'next/link';

import Status from '../components/auth/AuthStatus';
import { Meta } from '../components/Meta';
import VideoText from '../components/VideoText';
import { BigTitle, TextWrapper } from '../styles';
import Layout from '../templates/Home';
import config from '../utils/config';
import { generateRandom } from '../utils/utils';

const Index = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Runs on mount only
    setImageIndex(generateRandom(config.totalImages));

    // Fade in clipped image
    if (!active) {
      setTimeout(() => {
        setActive(true);
      }, 2500);
    }
  }, []);

  return (
    <Layout
      meta={
        <Meta
          title={`${config.title}: ${config.tagline}`}
          description={config.description}
        />
      }
    >
      <Status />

      <TextWrapper className="hidden md:block">
        <VideoText
          text={config.title}
          // posterImage={`/assets/images/shots/${imageIndex}.jpg`}
          src={[
            '/assets/videos/3.mp4',
            '/assets/videos/0.mp4',
            '/assets/videos/1.mp4',
            '/assets/videos/2.mp4',
            '/assets/videos/4.mp4',
          ]}
        />
      </TextWrapper>

      <BigTitle
        className="text-8xl sm:text-12xl md:hidden"
        active={active}
        src={`/assets/images/shots/${imageIndex}.jpg`}
        content={config.title}
      >
        {config.title}
      </BigTitle>

      <Link href="/contact">
        <a className="font-bold text-4xl border-4 border-gray-900 transition text-gray-900 hover:text-white hover:bg-gray-900 p-6">
          Contact
        </a>
      </Link>
    </Layout>
  );
};

export default Index;
