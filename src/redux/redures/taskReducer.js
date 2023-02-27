import { UPDATE_TASK } from "../actions/taskActions";
import { ADD_TASK } from "../actions/types";
const initialState ={
    todos:[],
    current: null,
    filteredTodos:[]
};
const taskReducer = (state=initialState,{type,payload})=>{
    switch (type){
        case ADD_TASK:
    return {
          ...state,
          todos:[...state.todos,payload]

        };
        case SET_CURRENT_TASK:
            return{
                ...state,
                current:payload
            };
            case UPDATE_TASK:
                return{
                    ...state,
                    todos: state.todos.map((todo)=>
                    todo.id === payload.id
                    ?{...todo, description: payload.description}
                    :todo)

                };
                case TOGGLE_COMPLETED_TASK:
                    return {
                        ...state,
                        todos: state.todos.map((todo)=>
                        todo.id === payload?{...todo, isDone: !todo.isdone}:todo
                        )
                    };
        case FILTER_TASK:
            return{...state,
                filteredTodos:
                payload==="completed"
                ?state.todos.filter((todo)=> todo.isdone)
                :payload==="uncompleted"
                ?state.todos.filter((todo)=> !todo.isDone)
                :[]
            };
        default:
            return state;
    }
};
export default taskReducer;