import { Button, Typography } from '@material-ui/core'

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase'
import Modal from '../modal/Modal'
import Default from './Default'

const Reflect = ({ isAuth }) => {
  const [content, setContent] = useState([])
  useEffect(() => {
    //   //this code here fires when the page load
    const colRef = collection(db, 'urls')
    const q = query(colRef, where('type', '==', 'reflect'))
    const unsub = onSnapshot(q, (snapshot) => {
      let contentArray = []
      snapshot.forEach((doc) => {
        contentArray.push({ ...doc.data(), id: doc.id })
      })
      setContent(contentArray)
    })
    return () => unsub()
  }, [])

  //delete post
  const deletePost = async (id) => {
    const postDoc = doc(db, 'urls', id)
    await deleteDoc(postDoc)
  }

  return (
    <div
      style={{
        marginTop: '10rem',
        width: '100%',
      }}
    >
      <>{!isAuth ? <Default /> : <Modal />}</>
      <div>
        <div>
          {content.map((task) => {
            return (
              <div key={task.id}>
                {isAuth && task.author === auth.currentUser.uid && (
                  <div className='reflect-section'>
                    <div className='title'>
                      <Typography variant='h5'>{task.info}</Typography>
                    </div>
                    <Button
                      onClick={() => deletePost(task.id)}
                      variant='outlined'
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        fontSize: '10px',
                        marginLeft: '80%',
                        marginTop: '0',
                      }}
                    >
                      Delete
                    </Button>
                    <div className='reflect-body'>{task.text}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Reflect
