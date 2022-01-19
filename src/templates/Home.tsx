import { ReactNode } from 'react';

import Link from 'next/link';

import config from '../utils/config';

type HomeProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Home = (props: HomeProps) => (
  <div className="flex flex-col w-full min-h-screen antialiased px-1 py-16 text-center items-center">
    {props.meta}

    <div className="max-w-screen-md w-full mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-extrabold text-6xl text-gray-900">
            {config.title}
          </div>
          <div className="text-xl uppercase">{config.tagline}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      {/* <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {config.title}
      </div> */}
    </div>
  </div>
);

export default Home;
