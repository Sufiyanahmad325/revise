import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [miniSecond, setMiniSecond] = useState(0)


  let startWatch = useRef()
  let run = useRef(false)



  const startTimer = ()=>{
     

    setMiniSecond(ms => {
      if (ms < 99) {
        return ms + 1
      } else {
        setSeconds(sec => {
          if (sec < 59) {
            return sec + 1
          } else {
            setMinutes(min => {
              if (min < 59) {
                return min + 1
              } else {
                setHours(hr => hr + 1)
                return 0
              }
            })
            return 0
          }
        })
        return 0
      }
    })


  
  }
  
  const start=()=>{
    if(run.current){
      return
  }
  run.current = true

      startWatch.current=setInterval(()=>{
        startTimer()
      }, 10);
  }

  const stop =()=>{
    run.current = false
    clearInterval(startWatch.current)

  }


  const reset =()=>{
        clearInterval(startWatch.current)
        setMiniSecond(0)
        setSeconds(0)
        setMinutes(0)
        setHours(0)

        run.current=false
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className='text-4xl font-extrabold'>Sufiyan Watch</h1>
        <div className="flex space-x-4 text-4xl font-mono font-semibold text-white bg-gray-800 px-6 py-4 rounded-md shadow-md">
          <div className="hours">{hours<10 ? "0"+hours :hours}</div>
          <div className="minutes">{minutes<10 ? "0"+minutes : minutes}</div>
          <div className="seconds">{seconds < 10 ? "0"+seconds : seconds}</div>
          <div className="hours">{miniSecond<10 ? "0"+miniSecond :miniSecond}</div>
        </div>

        <div className="mt-6 flex gap-4">
          <button 
          onClick={start}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Start
          </button>
          <button
            onClick={stop}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Stop
          </button>
          <button
          onClick={reset}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
