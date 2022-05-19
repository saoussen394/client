/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import 'https://kit.fontawesome.com/a076d05399.js';
function TodoToday() {
  const [tasks, setTasks] = useState([]);


  const loadTask = async () => {
    axios.get(`http://localhost:5000/api/v1/todo/today/tasks`).then((response) => {
      
      setTasks(response.data);
    });
  };
  useEffect(() => {
    loadTask();
  }, []);
  const fourthStatus = async (id) => {

    axios.put(`localhost:5000/api/v1/todo/today/task/fourthStatus/${id}`)
      .then((result) => {
        loadTask();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };


  

  const HandleClick = () => {
    Swal.fire({
      type: 'error',
      icon: 'error',
      title: 'Oops U have clicked 3 times',
    })
  }
  return (
    <div>
      <div id="center">
        <section id="todo-cmp">
          <header id="todo-cmp__header">
            <div className='todo3' />
            <a href="/todo"><button class="custom-btn btn-12"><span>Click here</span><span>Back </span></button> </a>

            <h2>To Do</h2>
            <p>List</p>
          </header>


          <table >
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} id='labeltodo' ><hr/>
                  <td> <input type="checkbox" /> </td>
                  <td width={"150px"}>	{task.title}</td>
                  <td width={"300px"}>	{task.instruction}</td>
                  <td width={"50px"}>   {task.duration}</td>
                  <td width={"80px"}><i class="gg-play-button-o" onClick={() => { fourthStatus(task.taskid)}}></i></td>
                  <td width={"80px"}><i class='fas fa-redo' style={{fontSize:"35px" , marginTop:"8px"}}></i></td>
                  <td width={"80px"}><i class="gg-play-pause-o" ></i></td>
                  <td width={"90px"}><i class="gg-check-o" ></i></td>
                  {
                    task.count < 3 &&
                    <button> test </button>
                  }
                </tr>
              ))}</tbody></table>
        </section> </div>
    </div>

  )
}
export default TodoToday;