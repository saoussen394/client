/* eslint-disable */
import { Modal , Button }from "react-bootstrap";
import React,  { useState, useEffect }from 'react';
import axios from "axios";
import  { useTracking } from "react-tracking";
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";  



function Addusermodal(props) {
    const { trackEvent } = useTracking();
    const [Record,setRecord] = useState([]);
    let navigate = useNavigate()
    const [user, setUser] = useState({
        cin: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        city: "",
        zip: "",
        dep: "",
        password: "",
        password_repeat:""
    });
    const { cin, first_name, last_name, email, phone , city, zip , dep,  password , password_repeat } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

const handleReset = () => {
    setUser({
        cin: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        city: "",
        zip: "",
        department: "",
        password: "",
    })
}

 const AddEmployee = async () => {
        axios.get(`http://localhost:5000/api/v1/employee`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        AddEmployee();
    }, []);
    const submitEmployeeRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
      const res =  await axios.post("http://localhost:5000/api/v1/employee", user).then(()=>{navigate(0)})
     if(res.status == 200)
        {
        AddEmployee()
        props.onHide()
        window.location.reload();
    }
};
    
const createHistory = () => {
    
     trackEvent({
            operation: "Add user",
            user : localStorage.getItem('role'),
            time:new Date().toLocaleString(),
          })    
        }
         const  HandleClick=()=> {  
            Swal.fire({  
              type: 'success',  
              icon: 'success',  
              title: 'Note added successfully', 
            });  
          } 

  return (
    <div><Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form onSubmit={submitEmployeeRecord}>
               <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter cin"
                            name="cin"
                            value={cin}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>   
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                            name="first_name"
                            value={first_name}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter last"
                            name="last_name"
                            value={last_name}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter phone number"
                            name="phone"
                            value={phone}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter city "
                            name="city"
                            value={city}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter  zip"
                            name="zip"
                            value={zip}
                            onChange={(e) => onInputChange(e)}
                                                        style={{ display: "inline-block", width: "98%",  opacity: "100%"}}

                        />
                    </div>
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
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter  password"
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Repeat password"
                            name="password_repeat"
                            value={password_repeat}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>                      
                               <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                    onClick={() =>{createHistory(); HandleClick();}}

                                >
                                    Insert Record
                                </button>
 <button type="reset" onClick={handleReset} className="btn btn-danger btn-block mt-4">Reset</button></form>
              </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal></div>
  );
}
export default Addusermodal;