import React, { useEffect } from 'react'
import Card from './utils/Card'
import Tags from './utils/Tags'
import {useNavigate} from 'react-router-dom'





function CategoryBoard() {
  
  return (
    <div className='relative md:h-full lg:h-36'>
      {/* {!category.loading  && <button onClick={handleClick} className='absolute right-3 top-3 text-xl text-indigo-500'>+</button>} */}
      <Card>
       <div className="flex">
       <Tags text='UI'/>
       <Tags text='UX'/> 
       </div>
      </Card>
    </div>
  )
}

export default CategoryBoard