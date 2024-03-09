import uuid from 'react-uuid';

let taskReducers = (state,action)=>{
    switch(action.type){
        case "ADD_TASK":{
            //action.payload = {title:'go out and enjoy', by '10/3/24'}
            const newTask = {...action.payload,"id": uuid(), "isDone": false}
            return [...state, newTask]
        }
        case "REMOVE_TASK":{
            //action.payload = id
            const filteredTask = state.filter((task) => task.id !== action.payload);
            return filteredTask;
        }
        case "DONE_TASK":{
            //action.payload = id
            const index = state.findIndex((task) => task.id === action.payload);
            const doneTask = [...state];
            doneTask[index].isDone = true;
            return doneTask;
        }
        default:{
            return state
        }
    }
}

let formReducers = (state,action)=>{
    console.log(action.field,action.payload);
    console.log({...state,[action.field]:action.payload})
    switch(action.type){
        case 'HANDLE_TASK':{
            return {...state,[action.field]:action.payload}
        }
        default:{
            return state
        }
    }
}

export {formReducers, taskReducers};