import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [errors, setErrors] = useState({})


  const handleErrors = () => {
    let myErrors = {}
    if (name.trim() == "") {
      myErrors.name = 'please enter your name'
    }


    if (email.trim() == '') {
      myErrors.email = "please enter your email"
    } else if (!email.endsWith("@gmail.com")) {
      myErrors.email = "email most be ended with @gmail.com"
    }


    if (password.trim() == "") {
      myErrors.password = "plase enter your password"
    } else if (password.length < 6) {
      myErrors.password = "password most be greater then 6 charector"
    }

    return myErrors
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()

    let getErrors = handleErrors()
    if (Object.keys(getErrors).length > 0) {
      setErrors(getErrors)
      return
    }

    console.log("Your form is submited")


  }

  return (
    <>
      <div className='w-[100vw] h-screen flex justify-center items-center bg-gray-400'>

        <div className=' flex flex-col  gap-3 border-2  py-3 px-3 shadow-black shadow-md bg-white rounded-2xl'>

          <div className='flex flex-col min-w-[400px] gap-2'>
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' :""}`}
            />

            {errors.name && <p className='text-red-500'>{errors.name}</p>}

          </div>

          <div className='flex flex-col min-w-[400px] gap-2'>
            <label htmlFor="">Email</label>
            <input
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' :""}`}
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}
          </div>

          <div className='flex flex-col min-w-[400px] gap-2'>
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' :""}`}
            />
            {errors.password && <p className='text-red-500'>{errors.password}</p>}
          </div>

          <button
            onClick={(e) => onHandleSubmit(e)}
            className='border-2  py-1 px-6 font-bold mx-auto rounded-lg '
          >Submit</button>

        </div>

      </div>
    </>
  )
}

export default App
