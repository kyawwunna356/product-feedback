import React from 'react'
import Card from './utils/Card'
import {FaCircle} from 'react-icons/fa'

function RoadmapBoard() {
  return (
    <Card>
        <div className=" grid grid-cols-2 gap-6 ">
            <div className='text-start'>
                <p className='mb-3 text-slate-700 font-bold '>Roadmap</p>
                <p className='mb-1 text-slate-500 flex items-center'><i className=' text-xs mr-2 text-center text-blue-500'><FaCircle /></i> Planned</p>
                <p className='mb-1 text-slate-500 flex items-center'><i className=' text-xs mr-2 text-center text-purple-500'><FaCircle /></i>Progress</p>
                <p className='mb-1 text-slate-500 flex items-center'><i className=' text-xs mr-2 text-center text-pink-500'><FaCircle /></i>Live</p>
            </div>
            <div className='text-end'>
                <p className='mb-3 text-blue-500 font-bold'>Views</p>
                <p className='mb-1'>2</p>
                <p className='mb-1'>3</p>
                <p className='mb-1'>1</p>
            </div>
        </div>
    </Card>
  )
}

export default RoadmapBoard