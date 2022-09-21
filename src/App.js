import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import Product from './Product';

function App() {

  const [productArray, setProductArray] = useState([]);
  const [show, setShow] =  useState(true);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = (item) => {
    if(cart.indexOf(item) !== -1){
      alert("Product already added!");
      return;
    } 
    alert("Product added to cart. The number of products required can be changed by the counter.");
      setCart([...cart, item]);
      console.log(cart);
      setCounter(counter+1);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }

  useEffect(() =>{
    
    const productList = async () => {
      await fetch('https://fakestoreapi.com/products?limit=30')
      .then(result => result.json())
      .then(data => {
        const productArray = data.map((product) => (
          {
            key: product.id,
            desc: product.description,
            img: product.image,
            price: Math.floor(product.price),
            title: product.title,
            amount: 1,
            category: product.category,
          }
          
        ))
        setProductArray(productArray);
        console.log(productArray);
      })
    }

    productList();

  }, []); 


  return (
    <div className="App">
      <Navbar setShow={setShow} counter={counter} />
      {show ?  <Product productArray={productArray} handleClick={handleClick} handleChange={handleChange} setProductArray={setProductArray} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} counter={counter} setCounter={setCounter} productArray={productArray} />}
    </div>
  );
}

export default App;
