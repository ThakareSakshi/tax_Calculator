import React from 'react'
import FooterBody from './FooterBody'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white p-6  max-md:p-4'>
        {/* ---------------footer head-------------- */}
        <div className='flex w-full justify-between items-center px-4 border-b-2 border-solid border-gray-300 max-md:flex-col max-md:px-2'>
            <img src="logo2.png" alt=""/>
            <div className='flex gap-6 text-blue-500 text-xl p-2'> 
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-signal-messenger"></i>
            </div>
        </div>
        <FooterBody></FooterBody>
      
    </div>
  )
}

export default Footer
