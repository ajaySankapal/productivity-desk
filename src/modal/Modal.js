import React, { useEffect } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
  data,
  getDocs,
} from "firebase/firestore";

import { useState } from "react";

import { auth, db } from "../firebase/firebase";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 2rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  //   background-color: rgba(0, 0, 0, 0);

  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  //   bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

export default function Modal({ setIsAuth }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const [content, setContent] = useState([]);

  const types = ["task", "blogs", "tweets", "books", "reflect", "learn"];
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type && text && auth.currentUser.uid != null) {
      await addDoc(collection(db, "urls"), {
        type,
        info,
        text,
        author: auth.currentUser.uid,
      });
      const newUrl = { type, info, text };
      setContent([...content, newUrl]);
    }
    setType("");
    setText("");
    setInfo("");
  };

  // when the app loads we need to listen to the databse and fetch new urls as they load
  useEffect(() => {
    //   //this code here fires when the page load
    const q = query(collection(db, "task"));
    const unsub = onSnapshot(q, (snapshot) => {
      let contentArray = [];
      snapshot.forEach((doc) => {
        contentArray.push({ ...doc.data(), id: doc.id });
      });
      setContent(contentArray);
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        className="modal-btn"
        style={{
          backgroundColor: "#2979ff",
          color: "white",
          margin: "1rem",
          marginTop: "5rem",
          marginLeft: "2rem",
        }}
      >
        Add New
      </Button>
      <div className="input-modal">
        <StyledModal
          className="modal"
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box
            sx={{ "& > :not(style)": { m: 2, width: "30ch" } }}
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "0.5rem",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ padding: "2rem", width: "60%", marginLeft: "2rem" }}
            >
              <InputLabel id="demo-simple-select-label">Section</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="type"
                name="type"
                value={type}
                label="Section"
                onChange={handleChange}
                fullWidth
                variant="filled"
                style={{ backgroundColor: "#fff" }}
              >
                {types.map((type) => {
                  return (
                    <MenuItem key={new Date().getTime()} value={type}>
                      {type}
                    </MenuItem>
                  );
                })}
              </Select>
              <TextField
                id="info"
                name="info"
                label="write short info"
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                // variant="filled"
                fullWidth
                style={{ margin: "1.2rem 0 1.2rem 0", backgroundColor: "#fff" }}
              />
              <TextField
                id="url"
                name="url"
                label="add here"
                multiline
                type="text"
                // variant="filled"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                style={{ backgroundColor: "#fff" }}
              />
              <Button
                type="submit"
                variant="contained"
                color="default"
                style={{
                  marginTop: "0.6rem",
                  backgroundColor: "#2962ff",
                  color: "#fff",
                }}
              >
                Add
              </Button>
            </form>
          </Box>
        </StyledModal>
      </div>
    </div>
  );
}
