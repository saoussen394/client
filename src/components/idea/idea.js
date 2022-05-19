/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FcIdea } from "react-icons/fc";
import './idea.css'
function IdeaFetch() {
  let api_url = 'http://localhost:5000/api/v1/idea';
  let [ideas, setIdeas] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [err, setErr] = useState(null);
  useEffect(() => {
    const getIdeas = () => {
      fetch(api_url)
        .then(res => {


          if (res.status >= 400) {
            throw new Error("Server responds with error!")
          }
          return res.json()
        })
        .then(ideas => {
          setIdeas(ideas)
          setIsLoaded(true)
        },
          err => {
            setErr(err)
            setIsLoaded(true)
          })
    }; getIdeas()
  }, [])
  if (err) {
    return <div> {err.message} </div>
  } else if (!isLoaded) {
    return <div> Loading... </div>
  } else {
    return (
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <h1 className="mb-3 text-center mt-4" id='h1idea'>
          My Ideas
        </h1>
        <span className="ideas__section">
          {

            ideas.map(idea => (

              <section key={idea.id} className="idea">

                <FcIdea />
                <p id='p'>{idea.idea}</p>
                <p id='add'>Added by : {localStorage.getItem('role')}</p>
              </section>

            ))}
        </span>
      </div>
    )
  }
}
export default IdeaFetch;
