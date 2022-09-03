import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authReset } from '../features/auth/authSlice'
import { feedbackReset } from '../features/feedback/feedbackSlice'
import CustomButton from './CustomButton'


function Nav({setShowAddFeedbackForm}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {feedbacks} = useSelector(store => store.feedbacks)

  async function logOut(){
      localStorage.removeItem('product-feedback-user')
      dispatch(authReset())
      dispatch(feedbackReset())
      navigate('/')
  }

  function showFeedback(){
    setShowAddFeedbackForm(true)
  }

  return (
    <div className="flex p-4 md:p-8 justify-between items-center bg-slate-700 md:rounded-lg md:shadow-lg">
        <div className='text-white text-md md:text-lg'>
            <span className='mr-8 hidden md:inline-block'>{feedbacks.length} Suggestion</span>
            <div className='inline-block'>
                <span className='text-stone-400 mr-3'>sort by</span>
                <select name="" id="" className="bg-transparent outline-none">
                    <option value="" className='bg-slate-400 text-white'>Most upvotes</option>
                    <option value="" className='bg-slate-400 text-white'>Least upvotes</option>
                    <option value="" className='bg-slate-400 text-white'>Most comments</option>
                    <option value="" className='bg-slate-400 text-white'>Least comments</option>
                </select>
            </div>
        </div>
        <div>
            <CustomButton text='+Add feedback' func={showFeedback}/>
            <span className='mr-4 hidden md:inline-block'></span>
            <div className="hidden md:inline-block">
             <CustomButton text='Log out' color='bg-blue-500' func={logOut} hover='bg-blue-600'/>
            </div>
        </div>
    </div>
  )
}

export default Nav