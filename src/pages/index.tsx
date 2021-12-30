import Link from 'next/link';

import { Meta } from '../components/Meta';
import VideoText from '../components/VideoText';
import { TextWrapper } from '../styles';
import config from '../utils/config';

const Index = () => {
  return (
    <div className="antialiased w-full min-h-screen px-1 py-16 text-center flex items-center flex-col">
      <Meta
        title={`${config.title}: ${config.tagline}`}
        description={config.description}
      />

      <TextWrapper>
        <VideoText
          text={config.title}
          // posterImage={`/assets/images/shots/${imageIndex}.jpg`}
          src={[
            '/assets/videos/0.mp4',
            '/assets/videos/1.mp4',
            '/assets/videos/2.mp4',
          ]}
        />
      </TextWrapper>

      <p className="font-bold text-2xl mb-12 uppercase">
        Aerial cinematography {/* drone productions */}{' '}
        <span className="lowercase">with</span>{' '}
        <span className="font-extrabold text-white bg-gray-900 p-1 ">
          Impact
        </span>
      </p>

      <Link href="/contact">
        <a className="font-bold text-4xl transition text-gray-900 hover:border-0 hover:text-white hover:bg-gray-900 p-6">
          Interested?
        </a>
      </Link>
    </div>
  );
};

export default Index;
