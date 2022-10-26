import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
  useNavigate,
} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import Task from '../components/Task'
import Learn from '../components/Learn'
import Blogs from '../components/Blogs'
import Books from '../components/Books'
import Reflect from '../components/Reflect'
import { Button, Typography } from '@material-ui/core'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './Navbar.css'
const Navbar = ({ logo, setLogo, setIsAuth, isAuth }) => {
  let navigate = useNavigate()

  const signOut = () => {
    localStorage.clear()
    setIsAuth(false)
    navigate('/login')
  }
  useEffect(() => {
    var elem = document.querySelector('.sidenav')
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    })
  })
  useEffect(() => {
    var elem = document.querySelector('.sidenav')
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    })
  })

  return (
    <div
      style={{
        textAlign: 'center',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
      }}
      className='navbar-fixed'
    >
      <nav>
        <div className='nav-wrapper'>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down navlink-links'>
            <li>
              <Link to='/' style={{ fontSize: '1.3rem' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/task' style={{ fontSize: '1.3rem' }}>
                Task
              </Link>
            </li>
            <li>
              <Link to='/learn' style={{ fontSize: '1.3rem' }}>
                Learn
              </Link>
            </li>
            <li>
              <Link to='/blogs' style={{ fontSize: '1.3rem' }}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to='/books' style={{ fontSize: '1.3rem' }}>
                Books
              </Link>
            </li>
            <li>
              <Link to='/reflect' style={{ fontSize: '1.3rem' }}>
                Reflect
              </Link>
            </li>
            {/* <li>
              <Link to="/practice" style={{ fontSize: "1.3rem" }}>
                Practice
              </Link>
            </li> */}
            <li>
              <Link to='/login' style={{ fontSize: '1.3rem' }}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/task'>Task</Link>
        </li>
        <li>
          <Link to='/learn'>Learn</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
        <li>
          <Link to='/reflect'>Reflect</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
