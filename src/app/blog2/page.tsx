import React from 'react'
import Image from "next/image"
import VR from "@/../../public/assests/VR.png"
import Comments from '../components/comments'

const page = () => {
  return (
    <div className='w-full h-auto bg-[#ffffff] text-[#000000] mt-[73px]'>
        <div className='flex flex-col items-center justify-center gap-10 py-10'>
        <h1 className='font-bold text-5xl'>How to build a portfolio and get a job in UI/UX</h1>
        <Image
        src={VR}
        alt='VR'
        height={319}
        width={813}
        className='border border-[#000000] rounded-lg'/>
        
        <p className='w-[903px] font-normal text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio ullam eius sunt deleniti dolorem expedita quod asperiores, beatae nam veniam laborum ipsa eaque inventore, magni id in illum dignissimos molestias sed omnis velit architecto cumque eos! Sequi laborum nobis non ipsam placeat nemo laudantium quidem ab omnis temporibus distinctio, accusantium enim rem dicta dolorum inventore cum, consectetur officia dolores corporis quisquam quae! Quidem eligendi eveniet quia. Nesciunt fuga fugiat assumenda eos reiciendis adipisci, cum debitis vel. Tempore iste dolorum temporibus commodi modi sed blanditiis ipsum nihil qui nisi? Dicta illo quaerat, saepe inventore explicabo nesciunt reprehenderit consectetur rem molestiae.</p>
        <p>Published on 29 December 2024.</p>
        </div>
        
        <Comments/>
        
    </div>
  )
}

export default page