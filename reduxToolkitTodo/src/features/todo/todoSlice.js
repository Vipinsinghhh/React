import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text: "Hello World"
    }],
    editingTodo: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            if (state.editingTodo?.id === action.payload) {
                state.editingTodo = null
            }
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => ( todo.id === action.payload.id ? action.payload : todo ))
            state.editingTodo = null
        },
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload
        },
        clearEditingTodo: (state) => {
            state.editingTodo = null
        }
    }
})

export const {addTodo, removeTodo, updateTodo, setEditingTodo, clearEditingTodo} = todoSlice.actions

export default todoSlice.reducer
