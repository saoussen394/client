/* eslint-disable */
import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Addusermodal from './adduser'
import "../styles/searchbox.css"
import {ImSearch} from "react-icons/im";
import EditEmployee from "./EditEmployee";
import  { useTracking } from "react-tracking";
import swal from 'sweetalert';



function EmployeeDetail() {
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);
    const [modalShowadduser, setModalShowadduser] = useState(false);
    const [modalShowedit, setModalShowedit] = useState(0);
    const { trackEvent } = useTracking();



    // On Page load display all records
    const loadEmployeeDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/employee`)
        .then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        console.log(localStorage.getItem('role'))
        loadEmployeeDetail();
    }, []);
    

    // Search Records here
    const searchRecords = () => {
        alert(search);
        axios
            .get(`http://localhost:5000/api/v1/employee/searchRecord/${search}`)
            .then((response) => {
                setRecord(response.data);
            });
    };
const deleteRecord = (productId) => {
    alert("archivedd Successfully");

        axios
            .delete(`http://localhost:5000/api/v1/employee/${productId}`)
            .then((result) => {
                                swal({title:"Poof! Deletion completed successfully!", 
                icon: "success",});

            })
            .catch(() => {
                alert("Error in the Code");
            });
    };    

    const createHistory = () => {
    
        trackEvent({
               operation: "Delete employee ",
               user : localStorage.getItem('role'),
               time:new Date().toLocaleString(),
             })    
           }

    return (
        				<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">

        <section>            
                <h4 className="mb-4 text-center mt-4">
                    Employee managment
                </h4>
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-8">
                        <h1 className="text-center  ml-4 mt-4  mb-5">
                            View Records
                        </h1>
                        <div><div className="team"/>
                     <Button variant="primary" onClick={() => setModalShowadduser(true)}>
                       Add user 
                       </Button>
                      <Addusermodal
                      show={modalShowadduser}
                      onHide={() => setModalShowadduser(false)}
                      />

                        <div className="input-group mb-4 mt-3">
                           < div id='search'>
<div className="search-box">
    <button className="btn-search"  type="button"
onClick={searchRecords}><ImSearch id="btnsearch"/></button>
    <input type="text" className="input-search" placeholder="Type to Search..."
                                    onChange={(e) => setSearch(e.target.value)}
                                    required={true}/></div>
</div> 
                            
                        </div>
                         <table  className="table  table-striped">
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
                                    
                                    <th width="400px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((name,index,key) => (
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
                                        <td>
                                        <button className="btn btn-info btn-sm mr-2"
                                         onClick={() => setModalShowedit(name.id)}
                                         >Edit</button>  
                                         {modalShowedit === name.id ? <EditEmployee
                                        key={index} data={modalShowedit}
                                        show={modalShowedit === name.id}
                                        onHide={() => setModalShowedit(null)} 
                                         />:<></>} 
<button className="btn btn-danger btn-sm mr-2"
                                                onClick={() => {
                                                    const confirmBox =
                                                        window.confirm(
                                                            "Do you really want to archived " +
                                                                name.first_name
                                                        );
                                                    if (confirmBox === true) {
                                                        deleteRecord(name.id);createHistory()
                                                                }else{
                swal({title:"Don't worry, it won't be archivedd!"});
            }

                                                    
                                                }}
                                            >
                                                Delete
                                            </button>                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        </section></div>
    );
}

export default EmployeeDetail;
