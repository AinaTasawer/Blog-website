import React from 'react'
import Image from 'next/image'
import AI from "../../../public/assests/Container.png"
const Hero = () => {
  return (
    <div className='bg-[#7C4EE4] w-full h-auto mt-[73px]'><section className="text-[#FFFFFF] body-font">
    <div className="container mx-auto flex px-5 py-24 mt-12 md:flex-row flex-col items-center">
    
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className='font-bold text-base tracking-wide mb-6'>Featured Post</h1>
        <h1 className="title-font sm:text-4xl leading-loose text-7xl tracking-wider mb-6 font-bold text-[#FFFFFF]">
          How AI will
          
          <br className="hidden lg:inline-block"/> 
          Change the Future 
        </h1>
        <p className="mb-6 w-[520px] h-[80px] font-normal text-base leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
          tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
          chambray.
        </p>
        <div className="flex justify-center mt-8">
          <button className="inline-flex text-[#373737] bg-[#FFFFFF] border-0 py-3 rounded-lg px-10 focus:outline-none hover:shadow-md hover:bg-[#7C4EE4] hover:border-white hover:border-2 hover:text-white text-sm font-bold">
            Read more
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="AI"
          src={AI}
          height={576}
          width={608}
          quality={100}
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero

