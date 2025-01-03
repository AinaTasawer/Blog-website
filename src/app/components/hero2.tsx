
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VR from '@/../../public/assests/VR.png';

const Hero2 = () => {
  return (
    <div className="bg-[#F9F9FB] w-full h-auto flex items-center justify-center py-16">
      <div className="relative w-[1232px] h-[576px]">
        {/* Background Image */}
        <Image
          src={VR}
          alt="VR Technology"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        
        {/* Content Box */}
        <div className="absolute bottom-[-50px] right-0 bg-white w-[920px] h-[300px] rounded-2xl shadow-lg p-8">
          <h4 className="text-[#7C4EE4] text-sm font-bold">DEVELOPMENT</h4>
          <p className="text-[#333333] text-4xl font-bold mt-2 leading-9">
            How to make a Game look more attractive with New VR & AI Technology
          </p>
          <p className="text-[#666666] text-base font-normal mt-4 w-[770px] h-[52px]">
            Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and 
            communities. Whether it’s publishing state-of-the-art research, building helpful products, or developing tools 
            and resources that enable others, we’re committed to making AI accessible to everyone.
          </p>
          <Link href="/blog1"><button className="mt-8 mb-4 bg-[#FFFFFF] text-[#7C4EE4] text-base font-bold px-6 py-2 rounded-lg hover:bg-[#E4DBFA] border-2 border-[#7C4EE4]">
            Read More
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

