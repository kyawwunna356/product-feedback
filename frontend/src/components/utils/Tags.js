import React from 'react'

function Tags({text}) {
  return (
    <div className='bg-slate-200 p-3 rounded-lg text-center text-blue-700 w-fit text-sm mr-3 mb-3 text-bold' >
        {text}
    </div>
  )
}

export default Tags