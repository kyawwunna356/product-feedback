import React, { useState } from 'react'
import Board from '../components/Board'
import CategoryBoard from '../components/CategoryBoard'
import Nav from '../components/Nav'
import RoadmapBoard from '../components/RoadmapBoard'
import MobileSidebar from '../components/MobileSidebar'

function Dashboard() {
  //state for mobile view sidebar
  const [show,setShow] = useState(false)
  
  return (
    <div>
      <div>
      {/* mobile sidebar */}
      {show && <MobileSidebar setShow={setShow}/>}
      </div>
      <div className='flex flex-col lg:flex-row'>
      {/* left side */}
        <div className='w-full md:flex md:justify-center md:items-stretch md:mb-4 lg:block lg:w-3/12 lg:mr-4'>
          <div className=' md:w-4/12 md:mr-4 lg:w-full lg:mr-0 lg:mb-4'>
            {/* pass the state to the hambuger menu */}
            <Board setShow={setShow}/>
          </div>
          <div className='hidden md:block md:w-4/12 md:mr-4 lg:w-full lg:mr-0 lg:mb-4'>
            <CategoryBoard />
          </div>
          <div className='hidden md:block md:w-4/12 md:mr-4 lg:w-full lg:mr-0 lg:mb-4'>
            <RoadmapBoard />
          </div>
        </div>

        {/* right side */}
        <div className='w-full lg:w-9/12'>
        <Nav />
        </div>
      </div>
    </div>
  )
}

export default Dashboard