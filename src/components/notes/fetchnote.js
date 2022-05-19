import React, { useState, useEffect } from 'react'
import axios from "axios";
import EditNote from './editnote';
import { FaBook } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { useTracking } from "react-tracking";
import './notes.css';
import swal from 'sweetalert';

function FetchNote() {
    const { trackEvent } = useTracking();
    const [modalShowedit, setModalShowedit] = useState(0);
    const [notes, setNotes] = useState([]);
    const loadNoteDetail = async () => {
        axios.get(`http://localhost:5000/api/v1/note`).then((response) => {
            setNotes(response.data);
        });
    };

    useEffect(() => {
        loadNoteDetail();
    }, []);
    const deleteRecord = (productId) => {
        axios
            .delete(`http://localhost:5000/api/v1/note/${productId}`)
            .then((result) => {
                swal({
                    title: "Poof! archived completed successfully!",
                    icon: "success",
                });

                loadNoteDetail();
            })
            .catch(() => {
                alert("Error in the Code");
            });
    };

    const createHistory = () => {
        trackEvent({
            operation: "Delete Note",
            user: localStorage.getItem('role'),
            time: new Date().toLocaleString(),
        })
    }



    return (
        <div>
            <span className="notes__section">
                {

                    notes.map((note, key) => (
                        <section className="note" key={note.id}>
                            <FaBook />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;

                            <button className='btn btn-outline-light' onClick={() => setModalShowedit(note.id)}>
                                <BsPencilSquare />
                            </button>
                            {modalShowedit === note.id ? <EditNote
                                key={key} data={modalShowedit}
                                show={modalShowedit === note.id}
                                onHide={() => setModalShowedit(null)}
                            /> : <></>}
                            &nbsp;&nbsp;
                            <button className="btn btn-outline-danger"
                                onClick={() => {
                                    const confirmBox = window.confirm("Do you really want to archived " + note.title);
                                    if (confirmBox === true) {
                                        deleteRecord(note.id); createHistory();
                                    } else {
                                        swal({ title: "Don't worry, it won't be archived!" });
                                    }


                                }}> <BsTrash id='btnicon' /></button>

                            <h3 className="note-title" >{note.title}</h3>
                            <p className="note-first__words">{note.details}</p>
                        </section>
                    ))}
            </span>
        </div>
    )
}

export default FetchNote