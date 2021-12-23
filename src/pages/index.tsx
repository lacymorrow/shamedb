import Link from 'next/link';

import { Meta } from '../components/Meta';
import { BigTitle } from '../styles';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  return (
    <div className="antialiased w-full px-1 text-center flex justify-center items-center flex-col">
      <Meta
        title={`${AppConfig.title}: ${AppConfig.tagline}`}
        description={AppConfig.description}
      />
      <BigTitle>{AppConfig.title}</BigTitle>
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
