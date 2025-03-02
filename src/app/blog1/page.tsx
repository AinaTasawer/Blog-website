import React from 'react';
import Image from 'next/image';
import VR from '@/../../public/assests/VR.png';
import Comments from '../components/comments';

const Page = () => {
  return (
    <div className="w-full h-auto bg-[#ffffff] text-[#000000] mt-[73px]">
      {/* Content Wrapper */}
      <div className="flex flex-col items-center gap-10 py-10 px-4">
        {/* Title */}
        <h1 className="font-bold text-4xl md:text-5xl text-center leading-tight">
          New AI & VR Technology
        </h1>

        {/* Image */}
        <Image
          src={VR}
          alt="VR"
          height={319}
          width={813}
          className="border border-[#000000] rounded-lg max-w-full h-auto"
        />

        {/* Description */}
        <p className="text-lg md:text-3xl font-normal text-justify leading-relaxed max-w-[90%] md:max-w-screen-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio ullam eius sunt deleniti dolorem expedita quod asperiores, 
          beatae nam veniam laborum ipsa eaque inventore, magni id in illum dignissimos molestias sed omnis velit architecto cumque eos! 
          Sequi laborum nobis non ipsam placeat nemo laudantium quidem ab omnis temporibus distinctio, accusantium enim rem dicta dolorum 
          inventore cum, consectetur officia dolores corporis quisquam quae! Quidem eligendi eveniet quia. Nesciunt fuga fugiat assumenda eos 
          reiciendis adipisci, cum debitis vel. Tempore iste dolorum temporibus commodi modi sed blanditiis ipsum nihil qui nisi? Dicta illo 
          quaerat, saepe inventore explicabo nesciunt reprehenderit consectetur rem molestiae.
        </p>

        {/* Publish Date */}
        <p className="text-sm md:text-base text-gray-500 text-center">
          Published on 29 December 2024.
        </p>
      </div>

      {/* Comments Section */}
      <Comments />
    </div>
  );
};

export default Page;