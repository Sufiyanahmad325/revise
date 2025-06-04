import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const checkValidation = () => {
    let newErrors = {}

    if (!name.trim()) {
      newErrors.name = "please enter your name"
    }


    if (!email.trim()) {
      newErrors.email = "please enter your email"
    } else if (!email.endsWith("@gmail.com")) {
      newErrors.email = 'Only @gmail.com emails are allowed'
    }

    if (!password.trim()) {
      newErrors.password = "please enter your password"
    } else if (password.length < 6) {
      newErrors.password = 'password must be at least 6 characters long'
    }


    return newErrors

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let allErrors = checkValidation()
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors)
    }
    console.log({ name, email, password })
    console.log(Object.keys(errors))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4'
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>

        <div className='flex flex-col'>
          <label htmlFor="name" className='mb-1 font-medium'>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : ""}`}
          />

          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email" className='mb-1 font-medium'>Email</label>
          <input
            id="email"
            value={email}
            // type='email' // when i will not type email then it will give me error that write email with @ gmail.com
            onChange={(e) => setEmail(e.target.value)}
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : ""}`}
          />
          {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
        </div>

        <div className='flex flex-col'>
          <label htmlFor="password" className='mb-1 font-medium'>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : ""}`}
          />
          {
            errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
          }
        </div>

        <button
          type="submit"
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
