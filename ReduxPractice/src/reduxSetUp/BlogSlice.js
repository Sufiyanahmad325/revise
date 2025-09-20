import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    blogs: [
        { id: 1, title: 'First Blog', content: 'This is a short preview of the blog content. It gives an idea about the topic' },
        { id: 2, title: 'Second Blog', content: 'Here is another blog preview text. Keep it concise and engaging.' }
    ],
}


const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push({ id: nanoid(), title: action.payload.title, content: action.payload.content })
        }
    }
})

export const { addBlog } = blogSlice.actions

export default blogSlice.reducer