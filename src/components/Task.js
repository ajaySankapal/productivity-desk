import { ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import Modal from '../modal/Modal'
import { Button, Typography } from '@material-ui/core'
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone'
import { Col, Row } from 'react-bootstrap'
import './Task.css'

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import Default from './Default'

const Task = ({ isAuth }) => {
  const [content, setContent] = useState([])
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
    const parsedObject = JSON.parse(localStorage.getItem('checked'))
    parsedObject.checked = !checked
    const updatedResult = JSON.stringify(parsedObject)
    localStorage.setItem('checked', updatedResult)
  }
  useEffect(() => {
    //   //this code here fires when the page load
    const colRef = collection(db, 'urls')
    const q = query(colRef, where('type', '==', 'task'))
    const unsub = onSnapshot(q, (snapshot) => {
      let contentArray = []
      snapshot.forEach((doc) => {
        contentArray.push({ ...doc.data(), id: doc.id })
      })
      setContent(contentArray)
      localStorage.setItem('checked', checked)
      console.log(localStorage.getItem('checked'))
    })

    return () => unsub()
  }, [checked])

  //delete post
  const deletePost = async (id) => {
    const postDoc = doc(db, 'urls', id)
    await deleteDoc(postDoc)
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <>{!isAuth ? <Default /> : <Modal />}</>

      <div
        style={{
          marginTop: '10rem',
          width: '100%',
        }}
      >
        {content.map((task) => {
          return (
            <div key={task.id}>
              {isAuth && task.author === auth.currentUser.uid && (
                <div
                  className='container reflect-section'
                  style={{ opacity: '0.8' }}
                >
                  <div
                    className='reflect-body'
                    style={{ marginLeft: '40px', marginBottom: '10px' }}
                  >
                    <Row>
                      <Col md={10}>
                        <Typography variant='h5'>
                          {/* <FiberManualRecordTwoToneIcon
                            style={{
                              color: 'rgb(79 70 229)',
                            }}
                          /> */}
                          <input
                            value={task.text}
                            type='checkbox'
                            checked={checked}
                            onChange={handleCheck}
                          />
                          {task.text}
                        </Typography>
                      </Col>
                      <Col md={1} className='del-btn'>
                        <i
                          className='fa-solid fa-trash-can delete-btn'
                          onClick={() => deletePost(task.id)}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Task
