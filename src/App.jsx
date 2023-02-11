import { useState , useLayoutEffect, useRef, useEffect} from 'react'
// Import all of Bootstrap's CSS
import './App.scss'
// Import our custom CSS
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { NavBar } from './navbar/components/NavBar'
//prime react css
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  //icons


import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './pages/home/components/Home';
import { Product } from './pages/product/components/Product';
import { Copyright } from './copyright/components/Copyright';

function App() {
  const urls = [
    '/',
    '/product'
  ]
  const [activeIndex, setActiveIndex] = useState(1);
  const updates = useRef(0);
  const navigate = useNavigate()
  
  useEffect(() => {
    
      updates.current +=1 ;
    
 if(updates.current>=2)   {
    if(activeIndex>= 1)
        navigate( urls[activeIndex-1]);
    
    
      }
}, [activeIndex])


  return (<>
    <NavBar activeIndex={activeIndex} setActiveIndex={setActiveIndex}></NavBar>
<div className='container'>
    <Routes>
<Route path={urls[0]} element={<Home></Home>}></Route>
<Route path={urls[1]} element={<Product></Product>}></Route>
    </Routes>
    </div>


    <Copyright></Copyright>
  </>
 
  )
}

export default App
