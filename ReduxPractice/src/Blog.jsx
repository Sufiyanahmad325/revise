import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog } from './reduxSetUp/BlogSlice'

function Blog() {

  const [title, setTitle] = useState('')
  const [content , setContent ] = useState('')

  let blog = useSelector((state)=> state.blog.blogs)
  const dispatch = useDispatch()


  const handleAdd =()=>{
      dispatch(addBlog({title:title , content:content}))
      setTitle('')
      setContent('')
  }


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>

      {/* Input Section */}
      <div className="mb-6 space-y-3">
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
          type="text"
          placeholder="Enter blog title..."
          className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
        value={content}
        onChange={(e)=>setContent(e.target.value)}
          className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Write your blog content..."
        />
        <button 
        onClick={handleAdd}
        className="w-full px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">
          Add
        </button>
      </div>

      {/* Blog Preview Section */}
      {
        blog.map(ele => (
          <div className="space-y-6 mt-3" key={ele.id}>
        <div className="p-4 border rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">{ele.title}</h2>
          <p className="text-gray-600">
            {ele.content}
          </p>
        </div>
       
      </div>
        ))
      }
    </div>
  )
}

export default Blog
