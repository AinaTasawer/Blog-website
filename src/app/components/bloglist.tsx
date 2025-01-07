import React from 'react';
import VR from '@/../../public/assests/VR.png';
import Image from 'next/image';
import Link from 'next/link';

const Bloglist = () => {
  return (
    <div className="w-full bg-[#7C4EE4] text-gray-100 py-14">
      <div className="container mx-auto max-w-screen-xl px-5 flex flex-col gap-12">
        {/* First Blog Post */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={VR}
            alt="VR Technology"
            height={180}
            width={423}
            className="rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="font-bold text-3xl mb-2">New AI & VR Technology</p>
            <p className="font-medium text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto consequatur laborum.
            </p>
            <Link
              href="/blog1"
              className="text-[#FFFFFF] underline font-medium hover:text-gray-300"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto bg-gray-300 h-[2px] w-full max-w-[1232px]"></div>

        {/* Second Blog Post */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={VR}
            alt="Portfolio Tips"
            height={180}
            width={423}
            className="rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="font-bold text-3xl mb-2">How to build a portfolio and get a job in UI/UX</p>
            <p className="font-medium text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto consequatur laborum.
            </p>
            <Link
              href="/blog2"
              className="text-[#FFFFFF] underline font-medium hover:text-gray-300"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Read More Posts */}
        <p className="text-right text-xl font-medium underline pr-4 hover:text-gray-300">
          Read more posts...
        </p>
      </div>
    </div>
  );
};

export default Bloglist;


