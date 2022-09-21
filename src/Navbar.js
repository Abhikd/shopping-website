import React from 'react'

const Navbar = ({ setShow, counter }) => {
  return (
    <div  className='fixed w-full h-[81px] flex justify-between items-center px-4 text-[#00df9a] bg-[#000300] '>
         <div>
            <h1 className='text-2xl font-bold w-full hover:cursor-pointer' onClick={() => setShow(true)} >Shopping Site</h1>
        </div>
        <div>
            <button className='bg-[#00df9a] w-[100px] rounded-md font-medium mt-4 py-3 text-black mx-auto' onClick={() => setShow(false)} >Cart({counter})</button>
        </div>
    </div>
  )
}

export default Navbar