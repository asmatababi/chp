import { useSelector } from "react-redux";
import Task from "./Task";
import React from "react";
const TaskList = ()=> {
    const {Tasks}=useSelector((state)=>state.todoReducer);

       return
    <ul className="todo-list-container">
    {Tasks.map((task)=>(
    <Task task={task} key={task.id}/>))}
</ul>;
;

};
export default TaskList;