import { Button, Typography } from '@material-ui/core'
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase/firebase'
import GoogleIcon from '@mui/icons-material/Google'
function Login({ isAuth, setIsAuth }) {
  let navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuth', true)
        setIsAuth(true)
        navigate('/')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='login-page'>
      <Button
        className='signInBtn'
        variant='contained'
        style={{
          marginLeft: '13rem',
          backgroundColor: '#2979ff',
          color: '#fff',
        }}
        startIcon={<GoogleIcon />}
        onClick={signInWithGoogle}
      >
        Sing In
      </Button>
    </div>
  )
}

export default Login
