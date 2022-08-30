import React from 'react'

function Card({children}) {
  return (
    <div className='p-8 bg-white rounded-lg shadow-md h-full w-full'>
        {children}
    </div>
  )
}

export default Card