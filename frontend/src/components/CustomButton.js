import React from 'react'

function CustomButton({text,color,func,hover}) {
  color = color ? color : 'bg-purple-500'
  hover = hover ? hover : 'bg-purple-600'
  
  return (
   <button
   onClick={func} 
   className={` ${color} hover:${hover} text-white px-4 font-bold py-3 text-sm rounded-lg tracking-wide`} style={{width: 'inherit'}}>
    {text}
   </button>
  )
}

export default CustomButton