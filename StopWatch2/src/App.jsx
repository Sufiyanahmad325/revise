import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [timer, setTimer] = useState({ milliSecond: 0, second: 0, minutes: 0, hours: 0 })

  let startWatch = useRef()
  let run = useRef(false)


  const startTimer = () => {

    setTimer(prev => {

      let milliSecond = prev.milliSecond

      let second = prev.second
      let minutes = prev.minutes
      let hours = prev.hours

      milliSecond = milliSecond + 1

      if (milliSecond > 99) {
        milliSecond = 0
        second = second + 1
      }

      if (second > 59) {
        second = 0
        minutes = minutes + 1
      }


      if (minutes > 59) {
        minutes = 0
        // hours + 1            // you can not it only calculation not assign any varile
        hours = hours + 1    // this is perfect way
      }

      return {
        milliSecond: milliSecond,
        second: second,
        minutes: minutes,
        hours: hours
      }
    })


  }

  const start = () => {
    if (run.current) return
    run.current = true;
    startWatch.current = setInterval(startTimer, 10);
  }


  const stop = () => {
    run.current = false
    clearInterval(startWatch.current)
  }

  const reset = () => {
    run.current = false
    clearInterval(startWatch.current)
    setTimer({ milliSecond: 0, second: 0, minutes: 0, hours: 0 })
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className='text-4xl font-extrabold'>Sufiyan Watch</h1>
        <div className="flex space-x-4 text-4xl font-mono font-semibold text-white bg-gray-800 px-6 py-4 rounded-md shadow-md">
          <div>{timer.hours < 10 ? "0" + timer.hours : timer.hours}</div>:
          <div>{timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}</div>:
          <div>{timer.second < 10 ? "0" + timer.second : timer.second}</div>:
          <div>{timer.milliSecond < 10 ? "0" + timer.milliSecond : timer.milliSecond}</div>
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
