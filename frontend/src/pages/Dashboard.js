import React, { useEffect, useState } from 'react'
import Board from '../components/Board'
import CategoryBoard from '../components/CategoryBoard'
import Nav from '../components/Nav'
import RoadmapBoard from '../components/RoadmapBoard'
import MobileSidebar from '../components/MobileSidebar'
import FeedbackBoard from '../components/FeedbackBoard'
import AddCategory from '../components/AddCategory'
import AddFeedback from '../components/AddFeedback'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { getAllFeedbacks, getCategories } from '../features/feedback/feedbackSlice'

function Dashboard() {
  //state for mobile view sidebar
  const [show,setShow] = useState(false)

  //state for category show
  const [showCategory,setShowCategory] = useState(false)

  //state for add feedback show
  const [showAddFeedbackForm,setShowAddFeedbackForm] = useState(false)
  

  const {mainLoading,feedbacks,categories} = useSelector(store => store.feedbacks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getAllFeedbacks())
  },[dispatch])

  if(mainLoading) {
    return (
      <Loading />
    )
  }
  return (
    <div>
      <div>
      {/* mobile sidebar */}
      {show && <MobileSidebar setShow={setShow}/>}
      {showCategory && <AddCategory setShowCategory={setShowCategory}/>}
      {showAddFeedbackForm && <AddFeedback setShowAddFeedbackForm={setShowAddFeedbackForm}/>}
      </div>
      <div className='flex flex-col lg:flex-row'>
      {/* left side */}
        <div className='w-full md:flex md:justify-center md:items-stretch md:mb-4 lg:block lg:w-3/12 lg:mr-4'>
          <div className=' md:w-4/12 md:mr-4 lg:w-full lg:mr-0 lg:mb-4'>
            {/* pass the state to the hambuger menu */}
            <Board setShow={setShow}/>
          </div>
          <div className='hidden md:block md:w-4/12 md:mr-4 lg:w-full lg:mr-0 lg:mb-4'>
          <CategoryBoard setShowCategory={setShowCategory} categories={categories}/>
          </div>
          <div className='hidden md:block md:w-4/12 md:mr-4 lg:w-full lg:mr-0 lg:mb-4'>
            <RoadmapBoard />
          </div>
        </div>

        {/* right side */}
        <div className='w-full lg:w-9/12'>
          <div className='mb-5'>
            <Nav setShowAddFeedbackForm={setShowAddFeedbackForm}/>
          </div>
          <div className='px-2 md:px-0'>
            <FeedbackBoard feedbacks={feedbacks}/>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard