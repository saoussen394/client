/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Addtaskmodal from "./Addtaskmodal";
import EditTask from "./EditTask";
import "../styles/searchbox.css"
import { ImSearch } from "react-icons/im";
import { useTracking } from "react-tracking";


function TaskDetail() {
    const { trackEvent } = useTracking();
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowtodo, setModalShowtodo] = useState(false);
    const [modalShowedit, setModalShowedit] = useState(0);
    // On Page load display all records
    const loadTaskDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/task`).then((response) => {
            setRecord(response.data);
        });
    };

    useEffect(() => {
        loadTaskDetail();
    }, []);
    // Search Records here
    const searchRecords = () => {
        alert(search);

        axios
            .get(`http://localhost:5000/api/v1/task/searchRecord/${search}`)
            .then((response) => {
                setRecord(response.data);
            });
    };


    const deleteRecord = (productId) => {
        alert("archivedd Successfully");

        axios
            .delete(`http://localhost:5000/api/v1/task/${productId}`)
            .then((result) => {
                swal({
                    title: "Poof! Deletion completed successfully!",
                    icon: "success",
                });

            })
            .catch(() => {
                alert("Error in the Code");
            });
    };

    const createHistory = () => {

        trackEvent({
            operation: "Delete task",
            user: localStorage.getItem('role'),
            time: new Date().toLocaleString(),
        })
    }

    return (
        <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
            <div className="task" />
            <h4 className="mb-3 text-center mt-4">
                Task managment
            </h4>
            <div className="col-sm-8">
                <h5 className="text-center  ml-4 mt-4  mb-5">
                    View Records
                </h5>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add task
                </Button>
                <Addtaskmodal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <div className="input-group mb-4 mt-3">



                    < div id='search'>
                        <div className="search-box">
                            <button className="btn-search" type="button"
                                onClick={searchRecords}><ImSearch id="btnsearch" /></button>
                            <input type="text" className="input-search" placeholder="Type to Search..."
                                onChange={(e) => setSearch(e.target.value)}
                                required={true} /></div>
                    </div>

                </div>
                <table className="table  table-striped" style={{ marginLeft: "3%" }} >
                    <thead>
                        <tr className="table-success" >
                            <th width="120px">id</th>
                            <th width="120px">title</th>
                            <th width="120px">instruction</th>
                            <th width="120px">duration</th>
                            <th width="120px">repeated</th>
                            <th width="150px">status</th>
                            <th width="400px">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((name, key) => (
                            <tr key={name.id}>
                                <td>{name.taskid}</td>
                                <td>{name.title}</td>
                                <td>{name.instruction}</td>
                                <td>{name.duration}</td>
                                <td>{name.type}</td>
                                <td>{name.status}</td>
                                <td>
                                    <button className="btn btn-info btn-sm mr-2"
                                        onClick={() => setModalShowedit(name.id)}
                                    >Edit</button>
                                    {modalShowedit === name.id ? <EditTask
                                        key={key} data={modalShowedit}
                                        show={modalShowedit === name.id}
                                        onHide={() => setModalShowedit(null)}
                                    /> : <></>}
                                    <button
                                        className="btn btn-danger btn-sm mr-2"
                                        onClick={() => {

                                            const confirmBox =
                                                window.confirm(
                                                    "Do you really want to archived " +
                                                    name.title
                                                );
                                            if (confirmBox === true) {

                                                deleteRecord(name.id); createHistory();
                                            } else {
                                                swal({ title: "Don't worry, it won't be archivedd!" });
                                            }


                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button className="btn btn-success btn-sm mr-2"
                                        onClick={() => setModalShowtodo(name.id)}
                                    >Todo</button>
                                    {modalShowtodo === name.id ? <EditTask
                                        key={key} data={modalShowtodo}
                                        show={modalShowtodo === name.id}
                                        onHide={() => setModalShowtodo(null)}
                                    /> : <></>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskDetail;

