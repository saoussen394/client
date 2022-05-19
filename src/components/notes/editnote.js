/* eslint-disable */
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTracking } from "react-tracking";
import './notes.css';
import Swal from "sweetalert2";


function EditNote(props) {
  const { trackEvent } = useTracking();
  const [note, setNote] = useState({
    title: "",
    details: ""
  });
  const { title, details } = note;

  const onInputChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    console.log("e id du modal est " + props.data)
    const loadUser = async () => {
      console.log("e id du modal est dans loaduser " + props.data)
      await axios.get(`http://localhost:5000/api/v1/note/${props.data}`)

        .then((result) => {

          setUser({
            id: props.data,
            update: true,
            title: (result.data.response[0].title),
            details: (result.data.response[0].details),

          });
        })
        .catch((error) => console.log("error", error));
    };
    loadUser();
  }, []);

  const updateNote = async (e) => {
    //alert("Edit with success")
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/note/${props.data}`, note)
        .then(result => {
          console.log(result)
        })
    } catch (err) {
      console.log(err)
    }
    //window.location.reload()
  };

  const createHistory = () => {
    trackEvent({
      operation: "Edit Note",
      user: localStorage.getItem('role'),
      time: new Date().toLocaleString(),
    })
  }

  const HandleClick = () => {
    Swal.fire({
      type: 'success',
      icon: 'success',
      title: 'Change made successfully',
    });
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Note
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={updateNote}>

          <input
            id="inputenote"
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Task title"
            name="title"
            value={title}
            onChange={(e) => onInputChange(e)}
          /> <br /> <br />
          <textarea
            id="textnote"
            className="form-control form-control-lg"
            placeholder="Enter Task instruction"
            name="details"
            value={details}
            onChange={(e) => onInputChange(e)}
          /> <br />

          <button

            type="submit"
            className="btn btn-primary btn-block mt-4"
            onClick={() => { HandleClick(); createHistory() }}>
            Update Note

          </button></form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => { props.onHide; window.location.reload() }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditNote;