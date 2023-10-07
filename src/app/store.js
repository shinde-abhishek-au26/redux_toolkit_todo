// HOW TO BUILD STORE OF REDUX :-->

// 1) FIRST GET A CONFIGURE STORE METHOD :--> (CONFIGURE STORE IS THE METHOD FROM CORE REDUX NOT FROM REACT-REDUX)
import { configureStore } from '@reduxjs/toolkit';

// IMPORTING REDUCERS
import todoReducer from '../features/todo/todoSlice';

// 2) CREATING A STORE USING CONFIGURESTORE() METHOD AND EXPORTHING THAT STORE WITH VARIABLE.
export const store = configureStore({
  reducer: todoReducer,
});
