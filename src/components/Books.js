import { Button, Typography } from "@material-ui/core";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import Modal from "../modal/Modal";

const Books = ({ isAuth }) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    //   //this code here fires when the page load
    const colRef = collection(db, "urls");
    const q = query(colRef, where("type", "==", "books"));
    const unsub = onSnapshot(q, (snapshot) => {
      let contentArray = [];
      snapshot.forEach((doc) => {
        contentArray.push({ ...doc.data(), id: doc.id });
      });
      setContent(contentArray);
    });
    return () => unsub();
  }, []);

  //delete post
  const deletePost = async (id) => {
    const postDoc = doc(db, "urls", id);
    await deleteDoc(postDoc);
  };

  return (
    <div>
      <>
        {!isAuth ? (
          <Typography
            className="default"
            color="primary"
            variant="h5"
            style={{ margin: "18rem 0 0 35rem" }}
          >
            signIn with google to add book summaries.
          </Typography>
        ) : (
          <Modal />
        )}
      </>

      <div>
        {content.map((task) => {
          return (
            <div key={task.id}>
              {isAuth && task.author === auth.currentUser.uid && (
                <div className="reflect-section">
                  <div className="title">
                    <Typography variant="h5">{task.info}</Typography>

                    <Button
                      onClick={() => deletePost(task.id)}
                      variant="outlined"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        fontSize: "10px",
                        marginLeft: "80%",
                        marginTop: "0",
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="reflect-body" style={{ padding: "1rem" }}>
                    <Typography variant="body" display="block">
                      {" "}
                      {task.text}
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
