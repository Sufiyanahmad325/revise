import { useState , useRef, use, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  const body = useRef()

  // const handleChange = () => {
  //   let createdColor = myColor() 
  //   console.log(createdColor)
  //   setColor(createdColor)
  //   body.current.style.backgroundColor = color
  // }


  // const myColor =()=>{
  //   let a = 'ABCDEF1234567890'
  //   let hash = '#'

  //   for(let i= 0 ; i<6 ; i++){
  //     let b = Math.floor(Math.random() * a.length)
  //     hash += a[b]
  //   }

  //   return hash 
  // }


  const handleChange =()=>{
    let a = 'ABCDEF1234567890'
      let hash = '#'
  
      for(let i= 0 ; i<6 ; i++){
        let b = Math.floor(Math.random() * a.length)
        hash += a[b]
      }

      setColor(hash)
  }

  useEffect(()=>{
    body.current.style.backgroundColor = color 
  },[color])
  


  return (
    <>
      <div className='container' ref={body}>
        <button onClick={handleChange} >Change</button>
      </div>
    </>
  )
}

export default App
