import React from 'react';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { Github, Twitter } from 'lucide-react';
import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <section className="py-10 bg-zinc-900 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
            <div>
              <p className="text-base text-gray-500">Guide</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Quick Start </a>
                </li>
                <li>
                  <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Introduction </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">Community</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> WeChat Group </a>
                </li>
                <li>
                  <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Discord </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-gray-500">More</p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Github </a>
                </li>
                <li>
                  <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Twitter </a>
                </li>
              </ul>
            </div>

          </div>

          <hr className="mt-10 mb-10 border-gray-800" />

          <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center space-x-3 md:order-1 gap-3">
              <GitHubLogoIcon className='h-6 w-6' />
              <TwitterLogoIcon className='h-6 w-6' />
              <DiscordLogoIcon className='h-6 w-6' />
            </ul>

            <img className="h-12 w-30 auto md:order-3" src="https://www.farmfe.org/img/logo-farm.png" alt="" />

            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">Copyright © 2024 Farm, Inc. Built with Docusaurus.</p>
          </div>
        </div>
      </section>


    </>
  );
}
