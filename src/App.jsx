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
import { SignUp } from './pages/signup/components/SignUp';
import { Copyright } from './copyright/components/Copyright';


import {  createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from './firebase';
import { SignIn } from './pages/signin/components/SignIn';

function App() {
  const urls = [
    '/',
    '/inscrire',
    '/connecter'
  ]

  



  return (<>
    <NavBar urls={urls} ></NavBar>
<div className='container'>
    <Routes>
<Route path={urls[0]} element={<Home></Home>}></Route>
<Route path={urls[1]} element={<SignUp></SignUp>}></Route>
<Route path={urls[2]} element={<SignIn></SignIn>}></Route>
    </Routes>
    </div>


    <Copyright></Copyright>
  </>
 
  )
}

export default App
