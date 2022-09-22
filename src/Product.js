import React, { useState } from 'react'

const Product = ({ productArray, handleClick, handleChange }) => {

    const[search, setSearch] = useState("");

  return (
    <div className='text-black w-full h-screen'>
        <div className='max-w-[1000px] mx-auto flex flex-row justify-center pt-[100px]'>
        <h1 className='text-2xl font-semibold  text-[#00df9a]'>Products</h1>
        </div>
        <div className='max-w-[1000px] mx-auto flex flex-row justify-center pt-[10px] mb-10'>
        <input className='rounded-sm p-1 w-[450px] mt-5'  type="text" placeholder='Search by category(Example- men, woman, electronic etc.)' onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className=''>
        {
            productArray.filter((product) => { return search.toLowerCase() === '' ? product : product.category.toLowerCase().includes(search) }).map((product) => (
                <div className='flex items-center justify-evenly ml-10 mr-10 mb-7 px-5 bg-white rounded-md'>
                 <img alt='' className='h-[200px] w-[200px] mr-2 p-5' src={product.img} /> 
                 <div className='flex flex-col px-1 pt-3'>
                 <p className='text-[#00df9a] ml-5 '>Title</p>
                <p className='w-[150px] p-5'>{product.title}</p>
                </div>
                <div className='hidden lg:flex flex-col px-1 pt-3'>
                <p className='text-[#00df9a] ml-5 mb-[-5px] '>Description</p>
                <p className='w-[300px] p-5'>{product.desc}</p>
                </div>
                <div className='flex flex-col px-1 py-1'>
                <p className='text-[#00df9a] '>Price</p>
                <p className='mr-5'>${product.price}</p>
                </div>
                <div className='hidden lg:flex flex-row items-center space-x-2'>
                <button className='bg-[#00df9a] rounded-md pb-1 w-[20px] h=[15px] text-black' onClick={() => handleChange(product,-1)}>-</button>
                <p>{product.amount}</p>
                <button className='bg-[#00df9a] rounded-md pb-1 w-[20px] h=[15px] text-black'  onClick={() => handleChange(product,1)}>+</button>
                </div>
                <button className='bg-[#00df9a] w-[100px] px-2 rounded-md font-medium mt-4 py-3 text-black' onClick={() => handleClick(product)}>Add</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Product