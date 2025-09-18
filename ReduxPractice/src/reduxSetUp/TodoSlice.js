
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    allData: [{ id: 1, text: "hello" }, { id: 2, text: "Apple" }],
    isEditValue: null
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload.text,
            }
            state.allData.push(newTodo)
        },

        editTodo:(state, action)=>{
            state.allData = state.allData.map(ele => ele.id == state.isEditValue.id ? { ...ele, text: action.payload.text } : ele)
            state.isEditValue = null
        },

        deleteTodo: (state, action) => {
            state.allData = state.allData.filter(ele => ele.id != action.payload)
        },

        isEditTodo: (state, action) => {
            state.isEditValue = action.payload
        }
    }
})

export const { addTodo, deleteTodo, editTodo , isEditTodo } = todoSlice.actions


export default todoSlice.reducer