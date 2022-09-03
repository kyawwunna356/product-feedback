import React, { useEffect } from 'react'
import { FaTired } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeedbacks } from '../features/feedback/feedbackSlice'
import Feedback from './Feedback'
// import Feedback from './Feedback'
import Card from './utils/Card'
import PulseLoader from './utils/PulseLoader'

function FeedbackBoard({feedbacks}) {
  const {feedbackLoading} = useSelector(store => store.feedbacks)
  const dispatch = useDispatch()

  // useEffect(() => {

  //   dispatch(getAllFeedbacks())

  // },[])

  if(feedbackLoading) {
    return (
        <PulseLoader />
    )

  }
  return (
    <>
      
        {feedbacks.length > 0 ? 
          <div className='overflow-y-auto h-screen'>
          {feedbacks.map(el => <Feedback feedback={el} key={el.id} />) }
          </div>
        : 
        <Card>
          <div className='flex justify-center items-center text-xl font-bold tracking-wide text-slate-500 '>
            <i className='text-md mr-3 '><FaTired /></i> There is no feedback
          </div>
        </Card>
        }
   
    </>
    
  )
    }


export default FeedbackBoard