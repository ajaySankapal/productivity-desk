import { Typography } from '@material-ui/core'
import React from 'react'
import todo_img from '../img/todo4-rem_bg.png'
import './home.css'
const Home = () => {
  return (
    <div className='landingPage'>
      <div className='row'>
        <div
          className='col-md-6 col-10'
          style={{
            verticalAlign: 'text-bottom',
            textAlign: 'center',
            marginTop: '10%',
          }}
        >
          <div className='h-head1'>
            <p className='h-head1css'>
              <span>Productivity Desk</span> helps you organize your work and
              life
            </p>
          </div>
          <div className='h-head2'>
            <Typography
              variant='h5'
              component='h5'
              style={{
                fontSize: '1.6rem',
                marginLeft: '1.8vw',
                textAlign: 'justify',
              }}
            >
              Become focused, get organized, and be calm with productivity-desk
            </Typography>
          </div>
          <div className='h-head3'>
            <p className='h-head3-css'>
              Track your learnings and tasks, and put your favourite blogs and
              book summaries at one place
            </p>
          </div>
        </div>
        <div
          className='col-md-6 col-10'
          style={{ height: '100vh', marginTop: '5%' }}
        >
          <img src={todo_img} alt='' style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default Home
