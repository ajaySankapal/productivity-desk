import { ListItem } from "@material-ui/core";
import { Checkbox, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import Modal from "../modal/Modal";
import { Button, Typography } from "@material-ui/core";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
const Task = ({ isAuth }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    //   //this code here fires when the page load
    const colRef = collection(db, "urls");
    const q = query(colRef, where("type", "==", "task"));
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
            signIn with google to add tasks.
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
                    <Checkbox
                      style={{
                        position: "absolute",
                        margin: "1px 60px 10px 1px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      style={{ marginLeft: "50px", marginTop: "10px" }}
                    >
                      {task.info}
                    </Typography>

                    <Button
                      onClick={() => deletePost(task.id)}
                      variant="outlined"
                      style={{
                        display: "flex",
                        // backgroundColor: "red",

                        justifyContent: "flex-end",
                        fontSize: "10px",
                        marginLeft: "80%",
                        marginTop: "0",
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <div
                    className="reflect-body"
                    style={{ marginLeft: "40px", marginBottom: "10px" }}
                  >
                    <Typography>
                      <FiberManualRecordTwoToneIcon />
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

export default Task;
