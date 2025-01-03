import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] w-full h-[397px] border-gray-300 border-b"> 
      <div className="max-w-screen-xl flex flex-col justify-center items-center flex-wrap mx-auto gap-9 p-4">
        <p className="pt-4 font-extrabold text-[33.7px] text-[#150E06]"><span className="text-[#7C4EE4]">Aina</span>Tasawer.</p>

        <ul className="flex gap-10">
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-[#333333] hover:underline hover:underline-offset-4 hover:decoration-[#7C4EE4] hover:text-[#7C4EE4] md:dark:hover:text-[#7C4EE4] md:hover:text-[#7C4EE4] rounded md:hover:bg-transparent md:p-0"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-[#333333] hover:text-[#7C4EE4] hover:underline hover:underline-offset-4 hover:decoration-[#7C4EE4] md:dark:hover:text-[#7C4EE4] md:hover:text-[#7C4EE4] rounded md:hover:bg-transparent  md:p-0"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-[#333333] hover:text-[#7C4EE4] hover:underline hover:underline-offset-4 hover:decoration-[#7C4EE4] md:dark:hover:text-[#7C4EE4] md:hover:text-[#7C4EE4] rounded md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-[#333333] hover:text-[#7C4EE4] hover:underline hover:underline-offset-4 hover:decoration-[#7C4EE4] md:dark:hover:text-[#7C4EE4] md:hover:text-[#7C4EE4] rounded md:hover:bg-transparent  md:p-0  md:dark:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="container-links flex gap-4">
          <div className="w-[40px] h-[40px] bg-purple-600 rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-base">
            <p>FB</p>
          </div>
          <div className="w-[40px] h-[40px] bg-purple-600 rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-base">
            <p>IG</p>
          </div>
          <div className="w-[40px] h-[40px] bg-purple-600 rounded-full  flex items-center justify-center text-[#FFFFFF] font-bold text-base">
            <p>LN</p>
          </div>
          <div className="w-[40px] h-[40px] bg-purple-600 rounded-full  flex items-center justify-center text-[#FFFFFF] font-bold text-base">
            <p>GH</p>
          </div>
        </div>
<div className="px-9 w-full h-[1px] bg-[#7C4EE4]"></div>
<p className="text-base font-normal">Copyright Aina Tasawer 2023, All Rights Reserved</p>


      </div>
    </div>
  );
};

export default Footer;
