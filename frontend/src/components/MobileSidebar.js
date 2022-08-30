import React from 'react'
import {ImCross} from 'react-icons/im'

function mobileSidebar({setShow}) {
  
  return (
    <div className='w-8/12 h-screen fixed right-0 top-0 z-50 shadow-lg bg-slate-100 flex justify-center items-center'>
        <div className="absolute right-5 top-5">
         <i onClick={() => setShow(prevShow => !prevShow)}><ImCross /></i>
        </div>
        <ul className='text-2xl'>
            <li className={`p-10 text-start hover:text-purple-500`}>📘  categories</li>
            <li className='p-10 text-start hover:text-blue-500'>✅  roadmaps</li>
            <li className='p-10 text-start hover:text-red-500'>🔑  log_out</li>
        </ul>
    </div>
  )
}

export default mobileSidebar