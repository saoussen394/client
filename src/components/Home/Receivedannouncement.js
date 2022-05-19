/* eslint-disable */
import React, { useState, useEffect } from 'react';
function Receivedannouncement() {
    let api_url = 'http://localhost:5000/api/v1/announcement';
    let [announcements, setAnnouncements] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);
    let [err, setErr] = useState(null);
    useEffect(() => {
        const getAnnouncements = () => {
            fetch(api_url)
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("Server responds with error!")
                    }
                    return res.json()
                })
                .then(announcements => {
                    setAnnouncements(announcements)
                    setIsLoaded(true)
                },

                    err => {
                        setErr(err)
                        setIsLoaded(true)
                    })
        };
        getAnnouncements()
    }, [])
    if (err) {
        return <div> {err.message} </div>
    } else if (!isLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <div className="rpost">
                {announcements.map(announcement => (
                    <ul key={announcement.id}>
                        <li> Title :{announcement.title}<br />{announcement.description}</li>
                    </ul>))}

            </div>
        )
    }
}
export default Receivedannouncement;