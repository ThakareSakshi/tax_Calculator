import React from 'react'

const GetStarted = () => {
  return (
    <div className=' rounded-xl bg-[#0052FE] text-white w-[25%] p-10 flex flex-col items-center gap-3 h-min max-md:hidden'>
      <h1 className='text-3xl font-bold text-white text-center'> Get started with CoinX For Free</h1>
      <p className='text-sm text-center'>
        With the range of features, that you can equiped for free KoinX. Allow you to be more educated and aware of your tax reports.
      </p>
      <img src="getstarted.png" alt=""/> 

      <button className='p-2 px-4 bg-white text-black font-semibold rounded-md'>
        Get Started for Free
      </button>
    </div>
  )
}

export default GetStarted
