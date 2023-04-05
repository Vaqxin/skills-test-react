import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers:{
        addTodo: (state, action) =>{
            state.push(action.payload);
        },
        deleteTodo: (state, action) =>{
            return state.filter((_, i ) => i !== action.payload)
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;