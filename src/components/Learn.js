import { Button, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import LinkIcon from '@mui/icons-material/Link'
import { auth, db } from '../firebase/firebase'
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import Default from './Default'
const Learn = ({ isAuth }) => {
  const [content, setContent] = useState([])
  useEffect(() => {
    //   //this code here fires when the page load
    const colRef = collection(db, 'urls')
    const q = query(colRef, where('type', '==', 'learn'))
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
    <div>
      <>{!isAuth ? <Default /> : <Modal />}</>

      {isAuth ? (
        <Typography variant='h5' style={{ marginLeft: '2rem' }}>
          collection of sites to learn
        </Typography>
      ) : (
        ''
      )}
      {content.map((task) => {
        return (
          <div key={task.id} style={{ marginTop: '8rem' }}>
            {isAuth && task.author === auth.currentUser.uid && (
              <div style={{ padding: '0.3rem', marginLeft: '2rem' }}>
                <LinkIcon />
                <a
                  href={`${task.text}`}
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    fontSize: '1.3rem',
                    padding: '1rem',
                    color: '#01579b',
                  }}
                >
                  {task.info}
                </a>
                <Button
                  onClick={() => deletePost(task.id)}
                  variant='outlined'
                  color='primary'
                  style={{
                    display: 'flex',
                    // backgroundColor: "red",

                    justifyContent: 'flex-end',
                    fontSize: '10px',
                    marginLeft: '80%',
                    marginTop: '0',
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Learn
