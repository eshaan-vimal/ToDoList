import { useState } from "react";


function ToDoList ()
{
    let [tasks, setTasks] = useState(["Eat", "Code", "Sleep"]);
    let [newTask, setNewTask] = useState();

    function addNewTask ()
    {
        const taskInput = document.querySelector(".taskInput");
        let newTaskContent = taskInput.value;

        if (newTaskContent.trim())
        {
            newTask = newTaskContent;
            taskInput.value = "";

            setTasks(prevTasks => [...prevTasks, newTask]);
        }
    }

    function deleteTask (index)
    {
        setTasks(prevTasks => prevTasks.filter((task, i) => i !== index));
    }

    function goUpTask (index)
    {
        if (index > 0)
        {   
            let prevTasks = [...tasks];
            [prevTasks[index - 1], prevTasks[index]] = [prevTasks[index], prevTasks[index - 1]];
            setTasks(prevTasks);
        }
    }

    function goDownTask (index)
    {
        if (index < tasks.length - 1)
        {
            [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
            setTasks([...tasks]);
            console.log(tasks);
        }
    }


    return (
        <>
            <h1 className="pageTitle">To Do List</h1>
            
            <div className="inputContainer">
                <input type="text" placeholder="Enter task..." className="taskInput" />
                <button className="taskAdd" onClick={addNewTask}>Add</button>
            </div>

            <ol className="tasksContainer">
                {tasks.map((task, index) => 
                <li key={index} className="task">
                    <span className="taskContent">{task}</span>
                    <button className="delTask" onClick={() => deleteTask(index)}>delete</button>
                    <button className="upTask" onClick={() => goUpTask(index)}>⬆️</button>
                    <button className="downTask" onClick={() => goDownTask(index)}>⬇️</button>
                </li>)}
            </ol>
        </>
    );
}

export default ToDoList;