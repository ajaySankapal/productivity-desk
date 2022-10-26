import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom'

import Task from './components/Task'
import Learn from './components/Learn'
import Blogs from './components/Blogs'
import Books from './components/Books'
import Reflect from './components/Reflect'
// import Navigation from "./navbar/Navigation";
import TailwindNav from './navbar/TailwindNav'
import Login from './login-signup/Login'
import Home from './components/Home'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  return (
    <Router>
      {/* <Navigation isAuth={isAuth} setIsAuth={setIsAuth} /> */}
      <TailwindNav isAuth={isAuth} setIsAuth={setIsAuth} />
      <div className='main'>
        <Routes>
          <Route path='/productivity-desk' element={<Home />} />
          <Route path='/task' element={<Task isAuth={isAuth} />} />
          <Route path='/learn' element={<Learn isAuth={isAuth} />} />
          <Route
            path='/blogs'
            element={<Blogs isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route path='/books' element={<Books isAuth={isAuth} />} />
          <Route path='/reflect' element={<Reflect isAuth={isAuth} />} />

          <Route
            path='/login'
            element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
