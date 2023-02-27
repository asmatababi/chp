import{ADD_TASK,SET_CURRENT_TASK, UPDATE_TASK, FILTER_TASK ,TOGGLE_COMPLETED_TASK}from"./types";

export const AddTask=(payload)=>{
    return{type:ADD_TASK,payload};
};
export const setCurrentTask =(payload) =>{
    return {type:SET_CURRENT_TASK,payload};
};
export const fiterTask =(payload) =>{
    return {type:FILTER_TASK,payload};
};
export const updateTask =(payload)=>{
    return {type:UPDATE_TASK,payload};
};
export const toggleCompletedTask=(payload)=>{
    return { type: TOGGLE_COMPLETED_TASK, payload};
};