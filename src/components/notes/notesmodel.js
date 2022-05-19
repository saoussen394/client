/* eslint-disable */
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTracking } from "react-tracking";
import Swal from "sweetalert2";

function Addnotesmodal(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  const { trackEvent } = useTracking();

  const [record, setRecord] = useState([]);

  const [note, setNote] = useState({
    title: '',
    details: ""
  });

  const { title, details } = note;
  const onInputChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const loadNoteDetail = async () => {
    axios.get(`http://localhost:5000/api/v1/note`).then((response) => {
      setRecord(response.data);
    });
  };
  useEffect(() => {
    loadNoteDetail();
  }, []);

  const submitNoteRecord = async (e) => {
    e.preventDefault();
    e.target.reset();
    await axios.post("http://localhost:5000/api/v1/note", note);
    //  alert("Data Inserted");

    loadNoteDetail();
  };

  const createHistory = () => {
    trackEvent({
      operation: "Add Note",
      user: "userID",
      time: new Date().toLocaleString(),
    })
  }

  const HandleClick = () => {
    Swal.fire({
      type: 'success',
      icon: 'success',
      title: 'Note added successfully',
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
          NEW NOTES
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={submitNoteRecord}>

          <input type="text"
            id="inputenote"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => onInputChange(e)} />
          <br />
          <br />
          <textarea
            id="textnote"
            placeholder="Details"
            name="details"
            value={details}
            onChange={(e) => onInputChange(e)}
          /> <br />
          <button type="submit" className="btn btn-primary btn-block mt-4" onClick={() => { HandleClick(); reset(); createHistory(); }}>ADD</button>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => { props.onHide; refreshPage(); }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Addnotesmodal;