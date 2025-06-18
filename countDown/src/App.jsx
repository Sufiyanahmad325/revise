import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [day, setDay] = useState("00")
  const [hours, setHours] = useState('00')
  const [minute, setMinute] = useState('00')
  const [second, setSecond] = useState('00')

  let start = useRef()

  let UpComingDate = "19 jun 2025 06:00 PM"
  let UpCommitDateCovert = new Date(UpComingDate)

  useEffect(() => {


    function run() {
      let currentDate = new Date()
      let commingDate = UpCommitDateCovert - currentDate

      let totalSecond = commingDate / 1000

      let d = Math.floor((totalSecond / 60 / 60 / 24))
      let h = Math.floor((totalSecond / 60 / 60) % 24)
      let m = Math.floor((totalSecond / 60) % 60)
      let s = Math.floor(totalSecond % 60)


      setDay(d)
      setHours(h)
      setMinute(m)
      setSecond(s)

    }


    start.current = setInterval(run, 1000);


    return () => {
      clearInterval(start.current)
      console.log('mount')
    }


  }, [])




  return (
    <>

      <div className='w-scree h-screen flex flex-col justify-center items-center bg-gray-400 gap-4'>
        <h1 className='text-4xl font-bold shadow-[0px 0px 10px] shadow-black '>Count-down</h1>
        <main className='flex gap-5'>
          <div className='border-2 text-5xl font-bold py-2 px-2 rounded-md'>{String(day).padStart(2, '0')}</div>
          <div className='border-2 text-5xl font-bold py-2 px-2 rounded-md'>{String(hours).padStart(2, '0')}</div>
          <div className='border-2 text-5xl font-bold py-2 px-2 rounded-md'>{String(minute).padStart(2, '0')}</div>
          <div className='border-2 text-5xl font-bold py-2 px-2 rounded-md'>{String(second).padStart(2, '0')}</div>
        </main>
      </div>

    </>
  )
}

export default App
