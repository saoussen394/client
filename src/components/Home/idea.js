/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTracking } from "react-tracking";
import Swal from "sweetalert2";

function IdeaDetail() {
    function refreshPage() {
        window.location.reload(false);
    }
    const { trackEvent } = useTracking();
    const [setRecord] = useState([]);

    const [user, setUser] = useState({
        idea: "",
    });

    //  Object Destructuring
    const { idea } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // On Page load display all records
    const loadIdeaDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/idea`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        loadIdeaDetail();
    }, []);

    // Insert Idea Records
    const submitIdeaRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        await axios.post("http://localhost:5000/api/v1/idea", user);
        alert("Data Inserted");

        loadIdeaDetail();
    };

    const createHistory = () => {
        trackEvent({
            operation: "Add Idea",
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
        <div>
            <div class="IDbar title-IDbar">
                <h2 style={{ color: "#fff" }}>Ideas</h2>
            </div>
            <p>Send us your ideas.</p>
            <form onSubmit={submitIdeaRecord}>
                <div className="input-group mb-3">
                    <textarea className="form-control" placeholder="write here!" aria-label="Recipient's username" aria-describedby="button-addon2"
                        name="idea"
                        value={idea}
                        onChange={(e) => onInputChange(e)} />
                    <button className="IDbtn" type="submit" onClick={() => { HandleClick(); refreshPage(); createHistory(); }}>Send</button>
                </div><br />
            </form>

        </div>




    );
}

export default IdeaDetail;