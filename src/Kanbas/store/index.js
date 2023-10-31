import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "/Users/tanyabatra/Desktop/2023/Fall 2023/Web Development/Kanbas/Kanbas-react-web-app/src/Kanbas/Courses/Assignments/assignmentsReducer.js";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;