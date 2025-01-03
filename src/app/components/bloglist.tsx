import React from 'react'
import VR from '@/../../public/assests/VR.png';
import Image from 'next/image';
import Link from "next/link";

const Bloglist = () => {
  return (
    <div className='w-full h-auto bg-[#7C4EE4] mt-10 text-gray-100'>
<div className='flex flex-col justify-center items-center px-4 py-14 gap-12'>

    <div  className='flex items-center gap-12'>
    <Image
    src={VR}
    alt="VR"
    height={180}
    width={423}
    className='bg-gray-500 rounded-xl object-cover'
    />
  <div className='text-gray-100'>
        <p className='font-bold text-3xl'>New AI & VR technology</p>
        <p className='font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto consequatur laborum.</p>
        <Link
                href="/blog1" // Dynamic link to the blog post
                className="text-[#FFFFFF] underline mt-2 block"
              >
                Read More
              </Link>
    </div>
    </div>
{/* --------------------------DIVIDER----------------------- */}
<div className='mx-auto bg-gray-300 h-[2px] w-[1232px]'></div>

    {/* SECOND IMAGE */}
<div className='flex items-center gap-12'>
<Image
    src={VR}
    alt='VR'
    height={180}
    width={423}
    className='bg-gray-500 rounded-xl'
    />
  <div className='text-gray-100'>
        <p className='font-bold text-3xl'>How to build a portfolio and get a job in UI/UX</p>
        <p className='font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto consequatur laborum.</p>
        <Link
                href= "/blog2" // Dynamic link to the blog post
                className="text-[#FFFFFF] underline mt-2 block"
              >
                Read More
              </Link>
    </div>
</div>
 
</div>

<p className='justify-end flex pr-8 font-medium text-xl text-[#FFFFFF] underline pb-4'>Read more posts..</p>

    </div>
  )
}

export default Bloglist


