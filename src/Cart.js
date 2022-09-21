import React, { useEffect, useState } from 'react'

const Cart = ({ cart, setCart, handleChange, counter, setCounter, productArray }) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (key) => {
        const arr = cart.filter((item) => item.key !== key );
        setCart(arr);
        handlePrice();
        setCounter(counter-1);
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
         ) )
        
         ans= Math.floor(ans);
         setPrice(ans);
    }


    const handleBuy = () => {
        cart.map((item) => (
            item.amount = 1
        ))
        setCart([]);
        setCounter(0);
        alert("Thanks for shopping with us!");
       
    }

    useEffect(() => {
        handlePrice();
    })

  return (
    <div className=' w-full h-screen'>
         <div className='max-w-[1000px] mx-auto flex flex-row justify-center pt-[100px]'>
        <h1 className='text-2xl font-semibold mb-20 text-[#00df9a]'>Products in your cart</h1>
        </div>
        <div className='flex'>
            <div className='text-black h-screen w-[70%]'>
        {
                cart.map((product) => (
                <div className='flex items-center justify-evenly ml-10 mr-10 mb-7 px-5 bg-white rounded-md'>
                 <img alt='' className='hidden lg:flex h-[200px] w-[200px] mr-2 p-5' src={product.img} />   
                 <div className='flex flex-col px-1 pt-3'>
                 <p className='text-[#00df9a] ml-5 '>Title</p>
                <p className='w-[150px] p-5'>{product.title}</p>
                </div>
                <div className='flex flex-col px-1 py-1'>
                <p className='text-[#00df9a] '>Price</p>
                <p className='mr-5'>${product.price}</p>
                </div>
                <div className='hidden lg:flex flex-row items-center space-x-2'>
                <button className='bg-[#00df9a] rounded-md pb-1 w-[20px] h=[15px] text-black' onClick={() => handleChange(product,-1)}>-</button>
                <p>{product.amount}</p>
                <button className='bg-[#00df9a] rounded-md pb-1 w-[20px] h=[15px] text-black'  onClick={() => handleChange(product,+1)}>+</button>
                </div>
                <div className='hidden lg:flex  flex-col px-1 py-1'>
                    <p className='text-[#00df9a] '>Subtotal</p>
                <p className='mr-5'>${product.amount * product.price}</p>
                </div>
                <button className='bg-[#00df9a] w-[100px] px-2 rounded-md font-medium mt-4 py-3 text-black' onClick={() => handleRemove(product.key)}>Remove</button>
                </div>
            ))
        }
        </div>
        <div className='w-[25%] h-[250px] bg-white rounded-md mx-auto'>
        <h1 className='text-2xl font-semibold text-[#00df9a] p-4'>Cart totals</h1>
        <div className='flex justify-between p-4'>
        <h5 className='font-semibold  text-[#c1d2cd] p-2'>Subtotal</h5>
        <h5 className='font-semibold   text-[#c1d2cd] p-2'>${price}</h5>
        </div>
        <div className='flex justify-between p-4'>
        <h3 className='text-2xl font-semibold  text-[#00df9a] p-2'>Total</h3>
        <h3 className='text-2xl font-semibold  text-[#00df9a] p-2'>${price}</h3>
        </div>
        <div className='flex items-center justify-center mb-4'>
        <button className='bg-[#00df9a] w-[70px] px-1 rounded-md font-medium py-1 text-black ' onClick={handleBuy}>Buy</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Cart