
function Pagination({pageNo,handleNext,handlePrev}) {

  return (
    <div className='text-2xl flex gap-8 bg-slate-400 m-2 p-4 justify-center	'>
      <div className='cursor-pointer'
           onClick={handlePrev}      
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className='font-bold'>
        {pageNo}
      </div>
      <div className='cursor-pointer'
           onClick={handleNext}
      >
        <i className="fa-solid fa-arrow-right">
      </i></div>
    </div>
  )
}

export default Pagination