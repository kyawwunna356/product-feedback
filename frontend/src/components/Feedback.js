import React, { useEffect, useState } from 'react'
import Card from './utils/Card'
import Tags from './utils/Tags'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import {AiTwotoneMessage} from 'react-icons/ai'

function Feedback({feedback}) {
    const dispatch = useDispatch()


    function handleClick(id) {
        
    }




  return (
    <div className='mb-5'>
        <Card>
        <div className="flex items-start justify-between">
            <div className="flex">
                <div className='flex flex-col bg-slate-200 text-slate-500 font-bold p-2 rounded-lg text-center h-fit mr-10' >
                        <button className='mx-auto'><FaChevronUp onClick={() => handleClick(feedback._id)}/></button>
                        <p>{feedback.upvotes}</p>
                        <button className='mx-auto'><FaChevronDown onClick={() => handleClick(feedback._id)}/></button>
                </div>
                <Link  to={`/detail/${feedback._id}`}>
                <div>
                    <p className='font-bold text-xl text-slate-700 mb-4'>{feedback.title}</p>
                    <p className=' text-stone-400 mb-4'>{feedback.detail}</p>
                    <div className='w-12'>
                        <Tags text={feedback.category} />
                    </div>
                </div>   
                </Link>
            </div>
            <div>
                <p className='text-slate-700 font-bold flex items-center'>
                    <i className='text-slate-300 text-2xl inline-block mr-3'> <AiTwotoneMessage /></i>
                {feedback.comments.length}
                </p>
            </div>
        </div>
    </Card>
    </div>
  )
}

export default Feedback