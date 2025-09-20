import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './TodoSlice'
import blogSlice from './BlogSlice'

const store = configureStore({
    reducer:{
        todo:todoSlice,
        blog:blogSlice,
    }
})


export default store