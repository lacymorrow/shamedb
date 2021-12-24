import { useEffect, useState } from 'react';

import Link from 'next/link';

import { Meta } from '../components/Meta';
import { BigTitle } from '../styles';
import config from '../utils/config';
import { generateRandom } from '../utils/utils';

const Index = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    return () => {
      setImageIndex(generateRandom(config.shotsCount));
    };
  });

  return (
    <div className="antialiased w-full min-h-screen px-1 py-16 text-center flex items-center flex-col">
      <Meta
        title={`${config.title}: ${config.tagline}`}
        description={config.description}
      />

      <BigTitle src={`/assets/images/shots/${imageIndex}.jpg`}>
        {config.title}
      </BigTitle>
      <p className="font-bold text-2xl mb-12 uppercase">
        Aerial drone productions <span className="lowercase">with</span>{' '}
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
