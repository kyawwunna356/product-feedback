import React, { useEffect } from 'react'
import Card from './utils/Card'
import Tags from './utils/Tags'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../features/feedback/feedbackSlice'
import Spinner from './utils/Spinner'





function CategoryBoard({setShowCategory,categories}) {
  const dispatch = useDispatch()
  const {categoryLoading} = useSelector(store => store.feedbacks)
  // const {categories} = useSelector(store => store.feedbacks)

  function handleClick(){
    setShowCategory(true)
  }


  
  return (
    <div className='relative md:h-full lg:min-h-36 min'>
      <button onClick={handleClick} className='absolute right-3 top-3 text-xl text-indigo-500'>+</button>
      <Card>
       {
        categoryLoading 
        ? 
        <span><Spinner /> <span className='ml-4 text-indigo-500 text-bold tracking-wider text-lg'>Loading</span></span>
        :
        <div className="flex flex-wrap">
          {categories.length > 0 ? 
            categories.map(el => <Tags text={el.name} key={el.name}/>)
            :
            <p>empty</p>
           }
       </div>}
      </Card>
    </div>
  )
}

export default CategoryBoard