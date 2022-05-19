/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTracking } from "react-tracking";
import Swal from "sweetalert2";

function AnnouncementDetail() {
    const { trackEvent } = useTracking();

    function refreshPage() {
        window.location.reload(false);
    }

    const [user, setUser] = useState({
        id: "",
        title: "",
        description: "",

    });
    const [setRecord] = useState([]);


    //  Object Destructuring
    const { title, description } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    // On Page load display all records
    const loadAnnouncementDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/announcement`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        loadAnnouncementDetail();
    }, []);

    // Insert announcement Records
    const submitAnnouncementRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        await axios.post("http://localhost:5000/api/v1/announcement", user);
        loadAnnouncementDetail();
    };

    const createHistory = () => {
        trackEvent({
            operation: "Add announcement",
            user: localStorage.getItem('role'),
            time: new Date().toLocaleString(),
        })
    }

    const HandleClick = () => {
        Swal.fire({
            type: 'success',
            icon: 'success',
            title: 'Announcement added successfully !',
        });
    }

    return (
        <div>
            <h3 className="card-title" >Add announcement </h3>

            <form onSubmit={submitAnnouncementRecord}>
                <input type="text" id="post-title"
                    placeholder="Enter title here"
                    name="title"
                    value={title}
                    onChange={(e) => onInputChange(e)}
                />
                <br />

                <textarea placeholder="Write here your announcement"
                    name="description" className="post-body"
                    value={description}
                    onChange={(e) => onInputChange(e)}
                /><br />
                <button class="IDbtn" type="submit" onClick={() => { createHistory(); HandleClick() }} style={{ marginLeft: "15px", marginRight: "40px" }}>Publish</button>
                <button type="button" class="IDbtn" onClick={refreshPage} style={{ marginLeft: "15px", marginRight: "15px" }}>Refrech</button>
            </form> </div>
    );
}
export default AnnouncementDetail;