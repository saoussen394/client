/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import  { useTracking } from "react-tracking";


function EmployeeArchive() {
    const { trackEvent } = useTracking();
    const [record, setRecord] = useState([]);
    function refreshPage() {
        window.location.reload(false);
      }
// On Page load display all records
    const loademployeeDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/archiveEMP`).then((response) => {
            setRecord(response.data);
        });
    };
  
    useEffect(() => {
        loademployeeDetail();
    }, []);

   

    const deleteRecord = () => {
        alert("archivedd Successfully");

        axios
            .delete(`http://localhost:5000/api/v1/archiveEMP`),{method: 'DELETE'}
            .then((result) => {
                loademployeeDetail();
            })
            .catch(() => {
                alert("Error in the Code");
            });
    };

    const createHistory = () => {
    
        trackEvent({
               operation: "Delete employee archive",
               user : localStorage.getItem('role'),
               time:new Date().toLocaleString(),
             })    
           }
   
    return (
    <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">

        <section>
                <h4 className="mb-3 text-center mt-4">
                    Employee archive
                </h4>
                    <div className="col-sm-8">
                    <Button variant="primary" onClick={()=>{refreshPage(); createHistory();
                                                       const confirmBox =
                                                        window.confirm(
                                                            "Do you really want to archived all this archive ?" 
                                                                
                                                        );
                                                    if (confirmBox === true) {
                                                        deleteRecord();
                                                    }
                                                   
                                                    }} >
                       archived if you want
                       </Button>
                       <div className="input-group mb-4 mt-3">
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
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((name,index) => (
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
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div></section></div>
    );
}

export default EmployeeArchive;
