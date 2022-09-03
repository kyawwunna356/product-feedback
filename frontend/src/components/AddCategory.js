import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {BiArrowBack} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../features/feedback/feedbackSlice'
import CustomButton from './CustomButton'

function AddCategory({setShowCategory}) {
    const {register,handleSubmit,formState: {errors}} = useForm()
    const dispatch = useDispatch()
    console.log(errors)
    const {categoryLoading} = useSelector(store => store.feedbacks)

    async function onSubmit(data){
      dispatch(addCategory(data))
      setShowCategory(false)

    }
    
    if(categoryLoading) {
        return (
            <div className=' z-50 flex items-center justify-center fixed bg-opacity-50 bg-black m-0 px-5 top-0 left-0 w-full h-screen'>
                <div className='rounded-lg bg-slate-100 p-8'>
                    <h1 className='text-2xl font-bold mb-10'>Loading</h1>
                </div>
            </div>
          )
    }
    
    return (
      <div className=' z-50 flex items-center justify-center fixed bg-opacity-80 bg-black m-0 px-5 top-0 left-0 w-full h-screen'>
          <button onClick={()=>setShowCategory(false)} className='flex items-center fixed top-10 left-10 text-stone-100 font-bold text-lg' >
          <i className='inline-block mr-1'> <BiArrowBack /></i>
            Go back
          </button>
          <form className='rounded-lg bg-slate-100 p-8' onSubmit={handleSubmit(onSubmit)}>
              <h1 className='text-2xl font-bold mb-10'>Create new Category</h1>
              <div className='mb-5'>
                <p className='text-slate-700 font-bold tracking-wide mb-1'>Category Title</p>
                {/* <p className='text-stone-400 text-sm mb-3'>What's on your mind?</p> */}
                <input 
                {...register('name',{required: 'This field is required'})} 
                placeholder="What's on your mind?"
                className='block outline-none text-lg font-bold text-slate-700
                  bg-slate-200 w-full rounded-lg p-2 mt-4'/>
                  <p className='text-pink-600'>{errors ? errors.name?.message : ''}</p>
                <div className='w-full my-4'>
                    <CustomButton text='submit' />
                </div>
                
              </div>
          </form>
      </div>
    )
}

export default AddCategory