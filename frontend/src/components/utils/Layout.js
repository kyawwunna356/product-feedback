import React from 'react'

function Layout({children}) {
  return (
   <div className='px-0 py:0 md:px-8 lg:px-20 md:py-8 lg:py-10 bg-slate-100 min-h-screen'>
    {children}
   </div>
  )
}

export default Layout