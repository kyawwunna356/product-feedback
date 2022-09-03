import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addFeedback } from '../features/feedback/feedbackSlice'
import CustomButton from './CustomButton'

function AddFeedback({setShowAddFeedbackForm}) {
  const {register,handleSubmit,formState: {errors}} = useForm()
  const {categories} = useSelector(store => store.feedbacks)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  useEffect(() => {
  
  },[])


  function onSubmit(data){
    console.log(data)
    dispatch(addFeedback(data))
    setShowAddFeedbackForm(false)
  }

  return (
    <div className=' z-50 flex items-center justify-center fixed bg-opacity-60 bg-black m-0 px-5 top-0 left-0 w-full h-screen'>
         <button onClick={()=>setShowAddFeedbackForm(false)} className='flex items-center fixed top-10 left-10 text-stone-100 font-bold text-lg' >
          <i className='inline-block mr-1'> <BiArrowBack   /></i>
            Go back
          </button>
        <form className='rounded-lg bg-slate-100 p-8' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl font-bold mb-10'>Create new Feedback</h1>
            <div className='mb-5'>
              <p className='text-slate-700 font-bold tracking-wide mb-1'>Feedback Title</p>
              <p className='text-stone-400 text-sm mb-3'>Add a short,descriptive headline</p>
              <input {...register('title',{required: 'Enter a title'})} className='block outline-none text-lg font-bold text-slate-700
                bg-slate-200 w-full rounded-lg p-2 mt-4'/>
              <p className='text-pink-600'>{errors ? errors.title?.message : ''}</p>
            </div>
            <div className='mb-5'>
              <p className='text-slate-700 font-bold tracking-wide mb-1'>Category</p>
              <p className='text-stone-400 text-sm mb-3'>Choose a category for your feedback</p>
              <select {...register('category')} type="text" className='block outline-none text-lg font-bold text-slate-700
                bg-slate-200 w-full rounded-lg p-2 mt-4'>
                 {
                  categories.map(el => <option key={el.id} value={el.name}>{el.name}</option>)
                  }
               </select>
            </div>
            <div className='mb-10'>
              <p className='text-slate-700 font-bold tracking-wide mb-1'>Feedback Detail</p>
              <p className='text-stone-400 text-sm mb-3'>Include any specific comments on what should be improved, added etc.</p>
              <textarea {...register('detail',{required: 'Detail is preferred'})} type="text" className='block outline-none text-lg font-bold text-slate-700
                bg-slate-200 w-full rounded-lg p-2 mt-4'>
              </textarea>
              <p className='text-pink-600'>{errors ? errors.detail?.message : ''}</p>
            </div>
            <div className=''>
              <div className='w-full mb-3'>
                <CustomButton text='Add Feedback' />
              </div>
              <div className='w-full mb-3'>
              <CustomButton text='Cancel' color='bg-slate-700' func={()=>setShowAddFeedbackForm(false)} />
              </div>
            </div>

        </form>
    </div>
  )
}

export default AddFeedback