// import React from 'react'

// const comments = () => {
//   return (
//     <div className='h-[400px] w-full bg-[#7C4EE4] text-white flex items-center justify-center'>

//         <div className='flex flex-col gap-5'>
//             <h1 className='font-bold text-[52px]'>What do you think about this Blog? Leave a comment!</h1>
//             <div className='gap-4 flex justify-center items-center'>
//                 <input type="text" placeholder='Write your comment' className='w-[320px] h-[56px] bg-white rounded-lg text-black pl-4 border-[#7C4EE4]'/>
//                 <button className='w-[166px] h-[56px] rounded-lg border-white border-2 bg-[#7C4EE4] text-white font-semibold text-base hover:bg-[#7d55da]'>Post</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default comments

import React from 'react';

const Comments = () => {
  return (
    <div className="h-[400px] w-full bg-[#7C4EE4] text-white flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center px-4 max-w-screen-lg">
        {/* Title */}
        <h1 className="font-bold text-[32px] md:text-[52px] text-center leading-tight">
          What do you think about this Blog? Leave a comment!
        </h1>

        {/* Input and Button */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Write your comment"
            className="w-[320px] h-[56px] bg-white rounded-lg text-black pl-4 border-2 border-[#7C4EE4] outline-none focus:ring-2 focus:ring-[#A17CFD]"
          />
          <button className="w-[166px] h-[56px] rounded-lg border-2 border-white bg-[#7C4EE4] text-white font-semibold text-base hover:bg-[#7d55da] transition-colors">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
