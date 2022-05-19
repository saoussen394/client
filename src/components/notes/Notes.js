/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Addnotesmodal from "./notesmodel";
import './notes.css'
import FetchNote from "./fetchnote";



function NoteDetail() {
    const [record, setRecord] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    // On Page load display all records
    const loadNoteDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/note`).then((response) => {
            setRecord(response.data);
        });
    };

    useEffect(() => {
        loadNoteDetail();
    }, []);


    return (
        <section className="bgimg w3-display-container w3-animate-opacity w3-text-white">
            <h1 className="mb-3 text-center mt-4" id="h1">
                My Notes
            </h1>
            <div className="col-sm-8">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    NEW NOTES
                </Button>
                <Addnotesmodal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <FetchNote />

        </section>

    );
}

export default NoteDetail;

