import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [workTime, setWorkTime] = useState(15)
  const [breakTime, setBreakTime] = useState(5)
  const [isWorkTime, setisWorkTime] = useState(true)
  const [showMinute, setshowMinute] = useState(0)
  const [showseconds, setShowSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const controlTimer = useRef()

  const startTimer = () => {
    if(isRunning) return

    setIsRunning(true)

    let time = isWorkTime ? workTime : breakTime
    let totalSeconds = time * 60

    console.log(totalSeconds)

    controlTimer.current = setInterval(() => {

      totalSeconds = totalSeconds - 1
      console.log(showseconds)

      let min = Math.floor(totalSeconds / 60)
      let sec = totalSeconds % 60

      setshowMinute(min)
      setShowSeconds(sec)


      if (totalSeconds <= 0) {
        if (isWorkTime == false) {
          setCount(prev => prev + 1)
        }
        clearInterval(controlTimer.current)
        setisWorkTime(prev => !prev)
        setIsRunning(false)
      }

    }, 10)


  }

  const reset = () => {
        clearInterval(controlTimer.current)
        setCount(0)
        setWorkTime(15)
        setBreakTime(5)
        setshowMinute("00")
        setShowSeconds('00')
        setIsRunning(false)
        setisWorkTime(true)
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
            >{isWorkTime ? 'workTime' : 'BreakTime'}</button>

            <button  onClick={reset}
              className=' py-2 px-6 rounded-md bg-green-700 text-white border-none font-bold'
            >Reset</button>
          </div>


          {/* input */}
          <div className='flex flex-col gap-2 '>

            <div className='flex gap-2'>
              <p>Work Time</p>
              <input type="number" min='15' max='60' value={workTime}
                onChange={(e) => setWorkTime(Number(e.target.value))}
                className='border m-auto w-[40px]'
              />
            </div>

            <div className='flex gap-2'>
              <p>Break Time</p>
              <input type="number" min='5' max='15' value={breakTime}
                onChange={(e) => setBreakTime(Number(e.target.value))}
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
