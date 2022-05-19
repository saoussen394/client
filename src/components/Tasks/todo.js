import React, { useState, useEffect } from 'react'
import axios from "axios";
import './todo.css'
function TodoTask() {
  const [tasks, setTasks] = useState([]);

  const userid = localStorage.getItem('userid')

  const loadTask = async () => {
    const dep = localStorage.getItem('dep')

    axios.get("http://localhost:5000/api/v1/todo/today/tasks/" + dep).then((response) => {
      setTasks(response.data);
    });
  };
  useEffect(() => {
    loadTask();

  }, []);
  const selectTodo = async (e) => {
    const taskid = e.target.value;
    const dep = localStorage.getItem('dep')
    await axios.post(`http://localhost:5000/api/v1/todo/addselectedtask`, { taskid, dep, userid })

  }
  return (
    <div>
      <div id="center">
        <section id="todo-cmp">
          <header id="todo-cmp__header"><div className='todo3' />
            <a href="/todotoday"><button class="custom-btn btn-12"><span>Click!</span><span>Start !</span></button> </a>
            <h2>To Do</h2>
            <p>List</p>
          </header>

          <ul id='todo-cmp__list'>
            <li id='litodo' >
              {tasks.map((task) => (
                <div>
                  <div className='point' />
                  <label key={task.id} id='labeltodo'>

                    <button
                      id="add" value={task.taskid}
                      onClick={(e) => {
                        const confirmBox =
                          window.confirm(
                            "you want to  add this task ? :  " +
                            task.title);
                        if (confirmBox === true) {
                          selectTodo(e);
                        }
                      }}
                    >
                      add
                    </button>
                    <span id="spantodo">{task.title}</span>
                    <hr />
                  </label></div>
              ))}
            </li>

          </ul>
        </section>
      </div>
    </div>

  )
}
export default TodoTask