import React from 'react';
import AnnouncementDetail from './annoucementDetail';
import Receivedannouncement from './Receivedannouncement';
import IdeaDetail from './idea'
import './home.css';

function Home() {


    return (
        <div id="main-container">
            <div id="left-container">
                <div id="newPost" class="IDcontainer">

                    <div class="side IDbar">
                        <ul>
                            <a href="#5" id="document"><span class="fontawesome-comments"></span></a>
                        </ul>
                    </div>

                    <div class="newPostContent" >
                        <AnnouncementDetail />
                    </div>
                </div>

                <div id="messages" class="IDbar">
                    <ul>

                        <a href="#17" search-message><span class="entypo-heart"></span></a>
                        <h2 style={{ color: "#fff" }}>Have nice day!</h2>
                    </ul>
                    <div class="lupa"></div>
                </div>

                <div id="suscribe" class="IDcontainer">
                    <IdeaDetail /> </div>


                <div id="messages" class="IDbar">
                    <ul>

                        <a href="#17" search-message><span class="entypo-heart"></span></a>
                        <h2 style={{ color: "#fff" }}>Never stop improvment!</h2>
                    </ul>
                    <div class="lupa"></div>
                </div>


            </div>

            <div id="middle-container"><div className='hello' />
                <div id="relatedPosts" class="IDcontainer">
                    <div class="IDbar title-IDbar">
                        <h2 style={{ color: "#fff" }}>Received announcments </h2>
                    </div>
                    <Receivedannouncement />
                </div>

                <div id="tags" class="IDcontainer">
                    <div class="bar title-bar">
                        <h2>Break Point (5 min)</h2>
                    </div>

                    <input type="button" value="Click Here!" class="IDbtn"></input>

                </div>

                <div id="IDmap" class="IDcontainer">
                    <div class="IDmap">

                    </div>
                    <i></i>
                    <div class="lupa"></div>
                </div>
            </div>

            <div id="right-container">
                <div id="calendar" class="IDcontainer">
                    <div class="IDbar title-IDbar">

                        <h2 style={{ color: "#fff" }}>Shortcut</h2>
                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action" aria-current="true">To Do </button>
                            <button type="button" className="list-group-item list-group-item-action">Dashboard</button>
                            <button type="button" className="list-group-item list-group-item-action" aria-current="true">Notes</button>
                            <button type="button" className="list-group-item list-group-item-action" > History</button>
                            <button type="button" className="list-group-item list-group-item-action" aria-current="true">Notes</button>

                        </div>
                    </div>

                </div>

                <br /><br />
                <div id="IDcategories" class="IDcontainer">
                    <div class="title-IDbar more-bar">
                        <ul>
                            <li><h2>Reminder</h2></li>
                        </ul>
                    </div>
                    <ul>
                        <li class="categories-opt">
                            <p >hight periorityy task </p>

                        </li>
                        <li>
                            <p >expired task </p>

                        </li>
                        <li>
                            <p>xxxxxxxxxxxxxx</p>

                        </li>
                        <li>
                            <p>xxxxxxxxxxxxxx</p>

                        </li>
                        <li>
                            <p>xxxxxxxxxxxxxx</p>

                        </li>
                    </ul>

                </div>

                <div id="moreOptions" class="IDcontainer">
                    <div class="title-IDbar more-bar moreOptions-bar">
                        <ul>
                            <li><a href="#34" class="popular">Rating</a></li>
                        </ul>
                    </div>
                    <div class="popular">
                        <p><a href="#37">xxxxxxxxxxxxxxx</a> <br />
                            <a href="#38">xxxxxxxxxxxxx</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
