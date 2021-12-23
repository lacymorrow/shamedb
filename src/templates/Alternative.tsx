import { ReactNode } from 'react';

import Link from 'next/link';

import { PageWrapper, Wrapper } from '../styles/alternative';
import { AppConfig } from '../utils/AppConfig';

type AltProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Alt = (props: AltProps) => (
  <PageWrapper className="min-h-screen">
    {props.meta}
    <div className="pt-16 pb-8 w-100 max-w-screen-lg w-full mx-auto flex-col justify-center">
      <div className="font-extrabold text-6xl text-gray-900">
        {AppConfig.title}
      </div>
      <div className="text-xl uppercase">{AppConfig.tagline}</div>
    </div>
    <Wrapper className="max-w-screen-md w-full mx-auto bg-black rounded-lg overflow-hidden table">
      <div className=" bg-[url('/images/bg-contact.png')] table-cell w-1/2"></div>

      <div className="border-b border-gray-300">
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
      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </div>
    </Wrapper>
  </PageWrapper>
);

export { Alt };
