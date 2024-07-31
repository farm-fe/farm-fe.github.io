import React from 'react';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { Github, Twitter } from 'lucide-react';
import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon } from '@radix-ui/react-icons';
import NeonGradientCard from '../../components/MagicUi/neon-gradient-card';
type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      {/* <NeonGradientCard height='18rem' borderRadius={0}> */}
      <section className="py-10 bg-zinc-950 sm:pt-12 lg:pt-20 text-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className='flex justify-between'>
            <div className='flex-col flex gap-4'>
              <img className="h-14 w-40 auto" src="https://www.farmfe.org/img/logo-farm.png" alt="" />
              <span className='text-xl font-bold'>Extremely Fast Web Build Tool Written in Rust</span>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-12">
                <div>
                  <p className="text-base text-gray-500">Guide</p>

                  <ul className="list-none mt-8 space-y-4 p-0">
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

                  <ul className="list-none mt-8 space-y-4 p-0">
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

                  <ul className=" list-none mt-8 space-y-4 p-0">
                    <li>
                      <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Github </a>
                    </li>
                    <li>
                      <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Twitter </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="my-14" />

          <div className="flex flex-wrap items-center justify-between">
            <ul className="flex items-center space-x-3 md:order-1 gap-3 p-0">
              <GitHubLogoIcon className='h-6 w-6' />
              <TwitterLogoIcon className='h-6 w-6' />
              <DiscordLogoIcon className='h-6 w-6' />
            </ul>


            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">Copyright © 2024 Farm Community. Built with Docusaurus.</p>
          </div>
        </div>
      </section>
      {/* </NeonGradientCard> */}
    </>
  );
}
