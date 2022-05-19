/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/searchbox.css";
import { ImSearch } from "react-icons/im";
import swal from 'sweetalert';


function History() {
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);

    // On Page load display all records
    const loadHistory = async () => {
        axios.get(`http://localhost:5000/api/v1/history`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        loadHistory();
    }, []);


    // Search Records here
    const searchRecords = () => {
        alert(search);
        axios
            .get(`http://localhost:5000/api/v1/history/searchRecord/${search}`)
            .then((response) => {
                setRecord(response.data);
            });
    };


    const deleteRecord = () => {
        axios
            .delete(`http://localhost:5000/api/v1/history`)
            .then((result) => {
                swal({
                    title: "Poof! Deletion completed successfully!",
                    icon: "success",
                });
                loadHistory();

            })
            .catch(() => {
                alert("Error in the Code");
            });
    };

    return (

        <section>
            <h1 className="mb-4 text-center mt-4">
                History
            </h1>
            <div><div className="history" />
                <div className="folder" />


                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button className="btn btn-outline-danger"
                    onClick={() => {
                        const confirmBox = window.confirm("Do you really want to delete all the history ?");
                        if (confirmBox === true) {
                            deleteRecord();
                        } else {
                            swal({ title: "Don't worry, it won't be deleted!" });
                        }

                    }}>delete history archive
                </button>

                <div className="input-group mb-4 mt-3">
                    <div className="form-outline">
                        < div id='search'>
                            <div className="search-box">
                                <button className="btn-search" type="button"
                                    onClick={searchRecords}><ImSearch id="btnsearch" /></button>
                                <input type="text" className="input-search" placeholder="Type to Search..."
                                    onChange={(e) => setSearch(e.target.value)}
                                    required={true} /></div>
                        </div>
                    </div></div>
                <table className="table  table-striped" style={{ marginLeft: "1%" }} >
                    <thead>
                        <tr className="table-success">
                            <th>id</th>
                            <th> operation</th>
                            <th>user</th>
                            <th>time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((name, index) => (
                            <tr key={index}>
                                <td>{name.id}</td>
                                <td>{name.operation}</td>
                                <td>{name.user}</td>
                                <td>{name.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    );
}

export default History;

