/* eslint-disable */
import { Modal , Button }from "react-bootstrap";
import React,  { useState, useEffect }from 'react';
import axios from "axios";
import  { useTracking } from "react-tracking";
import Swal from "sweetalert2";  



function EditEmployee(props) {
    const { trackEvent } = useTracking();
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
    });  

    const { cin, first_name, last_name, email, phone , city, zip , dep ,  password } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    
    useEffect(() => {
        const loadUser = async () => {
            console.log("e id du modal est dans loaduser " + props.data)
           await axios.get(`http://localhost:5000/api/v1/employee/${props.data}`)
                
                .then((result) => {
                  
                    setUser({
                        id: props.data,
                        update: true,
                        cin: result.response[0].cin,
                        fname: result.response[0].first_name,
                        lname: result.response[0].last_name,
                        email: result.response[0].email,
                        phone: result.response[0].phone,
                        city: result.response[0].city,
                        zip: result.response[0].zip,
                        dep: result.response[0].dep,
                        password: result.response[0].password,
                    });
                })
                .catch((error) => console.log("error", error));
        };
        loadUser();
    }, []);

    const updateEmp = async (e) => {
        e.preventDefault();
        try {
           await axios.put(`http://localhost:5000/api/v1/employee/${props.data}`, user)
        .then(result=>{
            console.log(result)
        })  
        } catch (err) {
            console.log(err)
        }
window.location.reload()  };
         const  HandleClick=()=> {  
            Swal.fire({  
              type: 'success',  
              icon: 'success',  
              title: 'Note added successfully', 
            });  
          } 

const createHistory = () => {
    
    trackEvent({
           operation: "Edit employee",
           user : localStorage.getItem('role'),
           time:new Date().toLocaleString(),
         })    
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
          Edit employee
        </Modal.Title>
     </Modal.Header>
              <Modal.Body>
                   <form onSubmit={updateEmp}>
                   <div className="form-group mb-3">
                   <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter cin"
                            name="cin"
                            value={cin}
                            onChange={(e) => onInputChange(e)}
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
                            <button
                            onClick={()=>{createHistory();HandleClick();}}
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
export default EditEmployee;