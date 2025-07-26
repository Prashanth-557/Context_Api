
import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './samplecomponents/Home';
import About from './samplecomponents/About';
import Services from './samplecomponents/Services';
import Contact from './samplecomponents/Contact';
import Products from './samplecomponents/Products';
import ProductDetails from './samplecomponents/ProductDetails';
import ParentComponent from './ParentComponent';
import UseRefComponent from './UseRefComponent';
import UseRefEample2 from './UseRefEample2';
import Calculate from './Calculate';
import { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import HomePage from './components/HomePage';
import Counter from './components/Counter';
import ApiDataFetch from './customhooks/ApiDataFetch';
function App() { 
  const [count,setCount]=useState(0)
  const [input,setInput]=useState(1)
  return (
    <div className="App">
      
      <Link to='/home'>Home </Link> | 
      <Link to='/about'>About </Link> | 
      <Link to='/services'>Services </Link> |
      <Link to='/Contacts'>Contacts </Link> |
      <Link to='/products'>ProductDetails </Link> 
      <hr/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes>
      <ParentComponent/>
      <hr/>
      <UseRefComponent/>
      <UseRefEample2/>
     
       <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={()=>setInput(1)}>1</button>
      <button onClick={()=>setInput(2)}>2</button>
      <button  onClick={()=>setInput(3)}>3</button>
      <Calculate number={input} />
      <button onClick={() => setCount(count + 1)}>
        Re-render App ({count})
      </button>
       
    <ThemeContext>
        <HomePage/>
    </ThemeContext>
    <Counter/>
    <h1>Users</h1>

<ApiDataFetch/>




    </div>
  );
}

export default App;
