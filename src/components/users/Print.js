/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";



function Printmodal(props) {
  const [record, setRecord] = useState([]);

  const loadUserInfo = async () => {
    await axios.get(`http://localhost:5000/api/v1/employee/print/${props.data}`)
      .then((result) => {
        let { response } = result.data
        //la7dha
        console.log(response[0])
        setRecord(response);
      });
  };
  useEffect(() => {
    loadUserInfo();
  }, []);

  function printDiv() {
    var divContents = document.getElementById("GFG").innerHTML; var a = window.open('', '', 'height=1000, width=1000');
    a.document.write('<html>');
    a.document.write("<body> <h1>Div contents are <br>");
    a.document.write(divContents);
    a.document.write('</body></html>');
  a.document.close();
  a.print();
}
return (<>
  <div>
    <div>
      <Modal
        {...props}

        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Print user data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div id="GFG" >


            <table border="1" className="table  table-striped">
              <thead>
                <tr className="table-success">
                  <th>initial id</th>
                  <th>Cin</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Zip</th>
                  <th>department</th>
                </tr>
              </thead>
              <tbody>
                {record.length > 0 && record.map((name, index) => (
                  <tr key={index}>
                    <td>{name.initialid}</td>
                    <td>{name.cin}</td>
                    <td>{name.first_name}</td>
                    <td>{name.last_name}</td>
                    <td>{name.email}</td>
                    <td>{name.phone}</td>
                    <td>{name.city}</td>
                    <td>{name.zip}</td>
                    <td>{name.roles}</td>

                  </tr>))}</tbody>

            </table></div>
        </Modal.Body>
        <Modal.Footer><input type="button" value="click" onClick={() => { printDiv(GFG) }} />
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal></div>


  </div>  </>
);
}
export default Printmodal;