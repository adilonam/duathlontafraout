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
import { Signup } from './pages/signup/components/SignUp';
import { Copyright } from './copyright/components/Copyright';


import {  createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from './firebase';

function App() {
  const urls = [
    '/',
    '/inscrire'
  ]
  const [activeIndex, setActiveIndex] = useState(1);
  const updates = useRef(0);//because there is a bug
  const navigate = useNavigate()
  
  




  return (<>
    <NavBar urls={urls} setActiveIndex={setActiveIndex}></NavBar>
<div className='container'>
    <Routes>
<Route path={urls[0]} element={<Home></Home>}></Route>
<Route path={urls[1]} element={<Signup></Signup>}></Route>
    </Routes>
    </div>


    <Copyright></Copyright>
  </>
 
  )
}

export default App
