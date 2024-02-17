import React from 'react'

function Pagination() {
  return (
    <div className='text-2xl flex gap-8 bg-slate-400 m-2 p-4 justify-center	'>
      <div className='cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
      <div className='font-bold'>1</div>
      <div className='cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination