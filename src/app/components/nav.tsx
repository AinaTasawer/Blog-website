import Link from 'next/link'
export default function Navbar(){
    return(
        <div>
             <nav className="bg-white fixed w-full h-[73px] z-20 top-0 start-0 border-b border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <p className="self-center text-2xl font-extrabold whitespace-nowrap">
        <span className="text-[#7C4EE4]">Aina</span>Tasawer.
      </p>
    
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="text-[#FFFFFF] bg-[#7C4EE4] hover:bg-[#663cc7] focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-[10px] text-center"
      >
        Contact Us
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FFFFFF] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-base border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
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
            href="/bloglist"
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
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}