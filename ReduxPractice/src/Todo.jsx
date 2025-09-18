import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo, isEditTodo } from "./reduxSetUp/TodoSlice";

function Todo() {
    const [text, setText] = useState('')
    const allData = useSelector((state) => state.todo.allData)
    const isEditValue = useSelector((state) => state.todo.isEditValue)

    const dispatch = useDispatch()

    const deleteHandle = (id) => {
        dispatch(deleteTodo(id))
    }


    const addTodoHandle = () => {
        if(text.trim() == '') return
        if (isEditValue != null) {
            dispatch(editTodo({ text: text }))
            setText('')
            return
        }
        dispatch(addTodo({ text: text }))
        setText('')

    }


    const handleEdit = (ele) => {
        dispatch(isEditTodo(ele))
    }


    useEffect(() => {
        if (isEditValue != null) {
            setText(isEditValue.text)
        }
    }, [isEditValue])

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Todo List
            </h1>

            {/* Input Section */}
            <div className="flex gap-2 mb-4">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Enter your task..."
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => addTodoHandle()}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Add
                </button>
            </div>

            {/* Static Todo List */}
            <ul className="space-y-3">
                {
                    allData.map((ele) => (
                        <li key={ele.id} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md">
                            <span className="text-gray-700">{ele.text}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(ele)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteHandle(ele.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Todo;
