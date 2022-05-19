/* eslint-disable */
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTracking } from "react-tracking";
import Swal from "sweetalert2";


function Addtaskmodal(props) {

  const { trackEvent } = useTracking();

  const HandleClick = () => {
    Swal.fire({
      type: 'success',
      icon: 'success',
      title: 'Note added successfully',
    })
  }

  const [records, setRecord] = useState([]);

  const [user, setUser] = useState({
    dep: "",
    title: "",
    instruction: "",
    duration: "",
    type: "",
    status: "",
  });
  const handleReset = () => {
    setUser({

      dep: "",
      title: "",
      instruction: "",
      duration: "",
      type: "",
      status: "",
    })
  }

  const { dep, title, instruction, duration, type, status } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const getTask = async () => {
    axios.get(`http://localhost:5000/api/v1/task`).then((response) => {
      setRecord(response.data);
    });
  };
  useEffect(() => {
    getTask();
  }, []);
  const submitTask = async (e) => {
    e.preventDefault();
    e.target.reset();
    await axios.post("http://localhost:5000/api/v1/task", user).then(() => {
      alert('data inserted')
    })
    getTask();
    // window.location.reload();
  };


  const createHistory = () => {

    trackEvent({
      operation: "Add task",
      user: localStorage.getItem('role'),
      time: new Date().toLocaleString(),

    })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Add task<div className="addtask" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={submitTask}>
          <div className="form-group mb-3">
            <select className="custom-select" name="dep"
              defaultValue={dep}
              onChange={(e) => onInputChange(e)}>
              <option> Select department </option>
              <option value="1"> Admin</option>
              <option value="2"> Information technologie </option>
              <option value="3"> Marketing </option>
              <option value="4"> Technical Services </option>
              <option value="5"> Accounting </option>
              <option value="6"> Customer services </option>
            </select>
          </div>
          <input
            type="text"
            id="inputeform"
            className="form-control form-control-lg"
            placeholder="Enter Task title"
            name="title"
            value={title}
            onChange={(e) => onInputChange(e)}
            style={{ display: "inline-block", width: "98%", opacity: "100%" }}
          /> <br />
          <input
            id="inputeform"
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Task instruction"
            name="instruction"
            value={instruction}
            onChange={(e) => onInputChange(e)}
            style={{ display: "inline-block", width: "98%", opacity: "100%" }}

          /> <br />  <br />
          <input

            type="number"
            className="form-control form-control-lg"
            placeholder="Enter duration (min)"
            name="duration"
            value={duration}
            onChange={(e) => onInputChange(e)}
          /><br />
          <label for="type">Type of task:</label>
          <select name="type"
            value={type} className="custom-select"
            onChange={(e) => onInputChange(e)}>
            <option value="">Select here!</option>
            <option value="Daily">Daily</option>
            <option value="Instant">Instant</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select><br />
          <label for="status"> status:</label>
          <select name="status"
            value={status} className="custom-select"
            onChange={(e) => onInputChange(e)}>
            <option value="">Select here!</option>
            <option value="enable">enable</option>
            <option value="disable">disable</option>
          </select><br />
          <hr />
          <button
            type="submit"
            className="btn btn-primary btn-block mt-4"
            onClick={() => { HandleClick(); createHistory(); }}                                >
            Insert Record
          </button>
          <button type="reset" onClick={handleReset} className="btn btn-danger btn-block mt-4">Reset</button></form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Addtaskmodal;