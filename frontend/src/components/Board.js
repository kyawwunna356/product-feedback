import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'

function Board({setShow}) {
  return (
    <div className="shadow-lg md:rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    h-24 md:h-full lg:h-36 relative  backdrop:blur-md ">
      <div className="w-11/12 absolute bottom-6 md:bottom-4 left-4 flex md:block items-center justify-between">
        <div >
            <h2 className="text-white font-bold text-xl">React Back!</h2>
              <p className="text-stone-300 text-sm ">Feedback board</p>
          </div>
          <p onClick={() => {setShow(prevstate => !prevstate)}}><i className="text-2xl cursor-pointer text-slate-100 md:hidden"><GiHamburgerMenu /></i></p>

      </div>
    </div>
  );
}

export default Board;
