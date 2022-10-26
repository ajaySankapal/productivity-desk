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
              <Link to='/productivity-desk/' style={{ fontSize: '1.3rem' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/productivity-desk/task' style={{ fontSize: '1.3rem' }}>
                Task
              </Link>
            </li>
            <li>
              <Link
                to='/productivity-desk/learn'
                style={{ fontSize: '1.3rem' }}
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                to='/productivity-desk/blogs'
                style={{ fontSize: '1.3rem' }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to='/productivity-desk/books'
                style={{ fontSize: '1.3rem' }}
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to='/productivity-desk/reflect'
                style={{ fontSize: '1.3rem' }}
              >
                Reflect
              </Link>
            </li>
            {/* <li>
              <Link to="/practice" style={{ fontSize: "1.3rem" }}>
                Practice
              </Link>
            </li> */}
            <li>
              <Link
                to='/productivity-desk/login'
                style={{ fontSize: '1.3rem' }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/productivity-desk'>Home</Link>
        </li>
        <li>
          <Link to='/productivity-desk/task'>Task</Link>
        </li>
        <li>
          <Link to='/productivity-desk/learn'>Learn</Link>
        </li>
        <li>
          <Link to='/productivity-desk/blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='/productivity-desk/books'>Books</Link>
        </li>
        <li>
          <Link to='/productivity-desk/reflect'>Reflect</Link>
        </li>
        <li>
          <Link to='/productivity-desk/login'>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
