import React from 'react'
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className='flex items-center justify-center h-screen px-5'>
        <ReactLoading type='bars' color='black'  />
    </div>
  )
}

export default Loading