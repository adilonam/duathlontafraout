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
import { auth } from './firebase';
import {  onAuthStateChanged } from "firebase/auth";

import { UserService } from './services/UserService';

import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './pages/home/components/Home';
import { SignUp } from './pages/signup/components/SignUp';
import { Copyright } from './copyright/components/Copyright';



import { SignIn } from './pages/signin/components/SignIn';
import { UserInfo } from './userinfo/components/UserInfo';

function App() {
  const urls = [
    '/',
    '/inscrire',
    '/connecter'
  ]

  
  const [user, setUser] = useState(null)

  const userService = new UserService()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user)
    } else {
      setUser(null)
    }
  });

  return (<>

    <NavBar urls={urls} user={user} ></NavBar>
<div className=''>
{ user && 
   <UserInfo user={user}></UserInfo>

    }
    <Routes>
<Route path={urls[0]} element={<Home urls={urls}></Home>}></Route>
<Route path={urls[1]} element={<SignUp></SignUp>}></Route>
<Route path={urls[2]} element={<SignIn></SignIn>}></Route>
    </Routes>
    </div>



    <Copyright></Copyright>
  </>
 
  )
}

export default App
