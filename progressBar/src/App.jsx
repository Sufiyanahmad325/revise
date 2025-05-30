import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState(0)

  const handleUpdate =(value)=>{
    if(value == 'prev' && result>0){
      setResult(prev=> prev-1)
      return
    }
    if(value == 'next' && result<3){
      setResult(prev=> prev+1)
      return
    }
  }

  console.log(result)

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-6'>
        <div className='flex w-[450px] justify-between relative items-center '>
          <div className='w-19 h-19 flex justify-center items-center font-bold text-2xl rounded-[50%] border-9 border-blue-500 bg-white'>1</div>
          <div className='w-19 h-19 flex justify-center items-center font-bold text-2xl rounded-[50%] border-9 border-blue-500 bg-white'>2</div>
          <div className='w-19 h-19 flex justify-center items-center font-bold text-2xl rounded-[50%] border-9 border-blue-500 bg-white'>3</div>
          <div className='w-19 h-19 flex justify-center items-center font-bold text-2xl rounded-[50%] border-9 border-blue-500 bg-white'>4</div>

          <div className='w-full h-2 absolute -z-1 bg-gray-200'>
            <div style={{ width: `${(result / 3) * 100}%` }} 
            className='h-2 bg-blue-500 transition-all duration-400 ease-in-out'></div>
          </div>
        </div>

        {/* button */}
        <div className='flex gap-8 '>
          <button className=' bg-blue-300 font-bold py-2 px-6 rounded-2xl'
            onClick={()=>handleUpdate('prev')}
          >
            prev
          </button>
          <button className=' bg-blue-300 font-bold py-2 px-6 rounded-2xl'
          onClick={()=>handleUpdate('next')}
          >
            next
          </button>
        </div>

      </div>
    </>
  )
}

export default App
