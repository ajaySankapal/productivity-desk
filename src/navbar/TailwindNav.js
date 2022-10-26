import { Button } from '@material-ui/core'
import { signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase/firebase'
import Login from '../login-signup/Login'
// import Button from "./Button";
const TailwindNav = ({ isAuth, setIsAuth }) => {
  let Links = [
    { name: 'home', link: '/' },
    { name: 'task', link: '/task' },
    { name: 'learn', link: '/learn' },
    { name: 'blogs', link: '/blogs' },
    { name: 'books', link: '/books' },
  ]
  let [open, setOpen] = useState(false)
  let navigate = useNavigate()
  const signOut = () => {
    localStorage.clear()
    setIsAuth(false)
    navigate('/')
  }
  return (
    <div
      className='shadow-md w-full fixed top-0 left-0'
      style={{ zIndex: '9999' }}
    >
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'
        >
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name='logo-ionic'></ion-icon>
          </span>
          productivity-desk
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
          {!isAuth ? (
            <Login />
          ) : (
            <Button
              style={{
                // borderRadius: 35,
                backgroundColor: 'rgb(79 70 229)',
                color: '#fff',
                marginLeft: '8px',
                // padding: "15px 31px",
                // fontSize: "18px",
              }}
              variant='contained'
              onClick={signOut}
            >
              LogOut
            </Button>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TailwindNav
