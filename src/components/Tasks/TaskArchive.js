/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";


function TaskArchive() {
    const [record, setRecord] = useState([]);
    function refreshPage() {
        window.location.reload(false);
    }
    // On Page load display all records
    const loadTaskDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/archive_task`).then((response) => {
            setRecord(response.data);
        });
    };

    useEffect(() => {
        loadTaskDetail();
    }, []);

    const deleteRecord = () => {
        alert("Deleted Successfully");

        axios
            .delete(`http://localhost:5000/api/v1/archive_task`), { method: 'DELETE' }
                .then((result) => {
                    loadTaskDetail();
                })
                .catch(() => {
                    alert("Error in the Code");
                });
    };

    return (
        <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">

            <section>
                <h4 className="mb-3 text-center mt-4">
                    Task archive
                </h4>
                <div className="col-sm-8">
                    <Button variant="primary" onClick={() => {
                        refreshPage(); const confirmBox =
                            window.confirm(
                                "Do you really want to archived all this archive ?"

                            );
                        if (confirmBox === true) {
                            deleteRecord();
                        }
                    }}  >
                        Delete if you want
                    </Button>
                    <div className="input-group mb-4 mt-3">
                    </div>
                    <table className="table  table-striped">
                        <thead>
                            <tr className="table-success">
                                <th>id</th>
                                <th>title</th>
                                <th>instruction</th>
                                <th>duration</th>
                                <th>repeated</th>
                                <th>updated_at</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((name, index) => (
                                <tr key={name.id}>
                                    <td>{name.id}</td>
                                    <td>{name.title}</td>
                                    <td>{name.instruction}</td>
                                    <td>{name.duration}</td>
                                    <td>{name.type}</td>
                                    <td>{name.updated_at}</td>
                                    <td>{name.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div></section></div>
    );
}

export default TaskArchive;
