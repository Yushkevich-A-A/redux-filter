import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "../reducers/taskListReducer/taskListReducer";
import addTaskReducer from "../reducers/addTaskReducer/addTaskReducer";
import filterReduser from "../reducers/filterTack/filterTack";


const store = configureStore ( {
    reducer: {
        taskList: taskListReducer,
        addTask: addTaskReducer,
        filterTask: filterReduser,
    }
});

export default store;