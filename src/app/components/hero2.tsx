
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VR from '@/../../public/assests/VR.png';

const Hero2 = () => {
  return (
    <div className="bg-[#F9F9FB] w-full py-16">
      <div className="container mx-auto max-w-screen-xl px-5 flex items-center justify-center">
        <div className="relative w-full lg:w-[1232px] h-auto aspect-[1232/576]">
          {/* Background Image */}
          <Image
            src={VR}
            alt="VR Technology"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />

          {/* Content Box */}
          <div className="absolute bottom-[-50px] right-0 bg-white w-full max-w-[920px] rounded-2xl shadow-lg p-6 md:p-8">
            <h4 className="text-[#7C4EE4] text-sm font-bold">DEVELOPMENT</h4>
            <p className="text-[#333333] text-2xl md:text-4xl font-bold mt-2 leading-relaxed md:leading-9">
              How to make a Game look more attractive with New VR & AI Technology
            </p>
            <p className="text-[#666666] text-sm md:text-base font-normal mt-4 leading-relaxed">
              Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and 
              communities. Whether it’s publishing state-of-the-art research, building helpful products, or developing tools 
              and resources that enable others, we’re committed to making AI accessible to everyone.
            </p>
            <Link href="/blog1">
              <button className="mt-6 md:mt-8 bg-[#FFFFFF] text-[#7C4EE4] text-sm md:text-base font-bold px-6 py-2 rounded-lg hover:bg-[#E4DBFA] border-2 border-[#7C4EE4]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
