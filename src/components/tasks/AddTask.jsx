import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {AddTask} from "../../redux/actions/taskActions";

const AddTask=()=>{

    const [text,setText] =useState("");
    const dispatch =useDispatch();
    const onAddClicked =()=>{
        if (text){
            const newTask ={id:Date.now(), description:text, isDone:false}
        dispatch(AddTask(newTask));
        }
    }
};
    const onFilter = dispatch (filterTask);
    return(
        <div>
            <div className="input-group mb-2">
           <input
           type="text"
           className="form-control"
           value={text}
           onChange={(e)=>setText(e.target.value)}
           />
           <button className="btn btn-primary"onClick={onAddClicked}>Add</button>

     </div>
        <div className="d-flex justify-content-around">
        <div>
            <input type="radio" name="task" value="all" id="all" onClick={onFilter} />
            <label className="form-label" htmlFor="all"> 
            all
            </label>
        </div>
        <div>
            <input type="radio" name="task" value="completed" id="completed" />
            <label className="form-label" htmlFor="completed">
                Completed
            </label>
        </div>
        <div>
            <input type="radio" name="task" value="uncompleted" id="uncompleted" />
            <label className="form-label" htmlFor="uncompleted">
                Uncompleted
            </label>
        </div>
    </div>
  
};
    export AddTask