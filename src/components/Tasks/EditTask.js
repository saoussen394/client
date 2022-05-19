/* eslint-disable */
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTracking } from "react-tracking";
import Swal from "sweetalert2";



function EditTask(props) {
  const { trackEvent } = useTracking();

  const [user, setUser] = useState({
    dep: "",
    title: "",
    instruction: "",
    duration: "",
    type: "",
  });
  const { title, instruction, duration, type } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const loadUser = async () => {
      await axios.get(`http://localhost:5000/api/v1/task/${props.data}`)

        .then((result) => {

          setUser({
            id: props.data,
            update: true,
            dep: (result.data.response[0].dep),
            title: (result.data.response[0].title),
            instruction: (result.data.response[0].instruction),
            duration: (result.data.response[0].duration),
            type: (result.data.response[0].type),
            qty: (result.data.response[0].qty),
          });
        })
        .catch((error) => console.log("error", error));
    };
    loadUser();
  }, []);

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/task/${props.data}`, user)
        .then(result => {
          console.log(result)
        })
    } catch (err) {
      console.log(err)
    }
    window.location.reload()
  };

  const createHistory = () => {

    trackEvent({
      operation: "Edit task",
      user: localStorage.getItem('role'),
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={updateTask}>

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Task title"
            name="title"
            value={title}
            onChange={(e) => onInputChange(e)}
          /> <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Task instruction"
            name="instruction"
            value={instruction}
            onChange={(e) => onInputChange(e)}
          /> <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter duration (min)"
            name="duration"
            value={duration}
            onChange={(e) => onInputChange(e)}
          /><br />
          <label for="type">Reapeated each:</label>
          <select name="type" className="custom-select"
            value={type}
            onChange={(e) => onInputChange(e)}>
            <option value="Instant">Instant</option>
            <option value="mon">Daily</option>
            <option value="tu">weekly</option>
            <option value="we">Monthly</option>
          </select>
          <button
            onClick={() => { createHistory(); HandleClick(); }}
            type="submit"
            className="btn btn-primary btn-block mt-4">
            update Record
          </button></form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditTask;