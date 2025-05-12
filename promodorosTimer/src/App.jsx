import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [workTime, setWorkTime] = useState(2)
  const [breakTime, setBreakTime] = useState(3)
  const [isWorkTime, setisWorkTime] = useState(true)
  const [showMinute, setshowMinute] = useState(0)
  const [showseconds, setShowSeconds] = useState(0)
  const [runningTimer, setrunningTimer] = useState('')

  const controlTimer = useRef()

  const startTimer = () => {
    let time = isWorkTime ? workTime : breakTime
    let totalSeconds = time * 60

    console.log(totalSeconds)

    controlTimer.current = setInterval(() => {
      
      totalSeconds = totalSeconds-1
      console.log(showseconds)
      
      let min = Math.floor(totalSeconds/60)
      let sec = totalSeconds%60

      setshowMinute(min)
      setShowSeconds(sec)


      if(totalSeconds <= 0){
        if(isWorkTime== false){
          setCount(prev=> prev+1)
        }
        clearInterval(controlTimer.current)
        setisWorkTime(prev=> !prev)
      }

    }, 100)


  }



  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-blue-200'>

        <div className=' w-[500px] rounded-2xl bg-blue-300 border-2 px-10 py-5 flex flex-col justify-center items-center gap-5 box '>

          <h1 className='text-3xl font-bold'>Promodoros Timer</h1>
          {/* Timer  */}
          <h1 className='text-3xl font-bold'>{showMinute}:{showseconds}</h1>


          {/*  button */}
          <div className='flex gap-4'>
            <button
              onClick={() => startTimer()}
              className=' py-2 px-6 rounded-md bg-green-700 text-white border-none font-bold'
            >{isWorkTime? 'workTime' : 'BreakTime'}</button>

            <button
              className=' py-2 px-6 rounded-md bg-green-700 text-white border-none font-bold'
            >Reset</button>
          </div>


          {/* input */}
          <div className='flex flex-col gap-2 '>

            <div className='flex gap-2'>
              <p>Work Time</p>
              <input type="number" min='2' value={workTime} 
              onChange={(e)=>setWorkTime(Number(e.target.value))}
                className='border m-auto w-[40px]'
              />
            </div>

            <div className='flex gap-2'>
              <p>Break Time</p>
              <input type="number" min='2' value={breakTime}
              onChange={(e)=>setBreakTime(Number(e.target.value))}
                className='border m-auto w-[40px]'
              />
            </div>

          </div>

          {/* count */}

          <p>promodoros Completed : {count}</p>

        </div>

      </div>
    </>
  )
}

export default App
