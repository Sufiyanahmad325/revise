import { useState } from 'react'
import './App.css'

function App() {
  const [indiaQuiz, setIndiaQuiz] = useState([
    {
      question: "What is the capital of Andhra Pradesh?",
      options: ["Amaravati", "Hyderabad", "Vijayawada", "Visakhapatnam"],
      answer: "Amaravati"
    },
    {
      question: "What is the capital of Maharashtra?",
      options: ["Nagpur", "Pune", "Mumbai", "Nashik"],
      answer: "Mumbai"
    },
    {
      question: "What is the capital of Tamil Nadu?",
      options: ["Coimbatore", "Madurai", "Chennai", "Salem"],
      answer: "Chennai"
    },
    {
      question: "What is the capital of West Bengal?",
      options: ["Darjeeling", "Howrah", "Kolkata", "Asansol"],
      answer: "Kolkata"
    },
    {
      question: "What is the capital of Rajasthan?",
      options: ["Jodhpur", "Udaipur", "Jaipur", "Ajmer"],
      answer: "Jaipur"
    }

  ])
  const [clickValues, setClickValues] = useState([])
  const [isResult, setIsResult] = useState(false)
  const [score, setScore] = useState(0)


  const storeValue = (value, index) => {
    setClickValues(prev => {
      const updated = [...prev];
      updated[index] = value
      return updated
    })

  }

  const checkResult = () => {
    clickValues.map((value, index) => {
      if (value == indiaQuiz[index].answer) {
        setScore(prev => prev + 1)
      }
    })


    // Second way 

    // clickValues.map((value ,index)=>{
    //   if(value == indiaQuiz[index].answer){
    //     setScore(prev => prev+1)
    //   }
    // })

    setIsResult(true)
  }

  return (
    <>
      <div className='flex flex-col gap-3 bg-blue-300 '>

        {!isResult ? (
          indiaQuiz.map((Element, index) => (
            <div key={index}>
              <h1 className='text-[19px] font-bold' >{Element.question}</h1>


              {
                Element.options.map((option, ind) => (
                  <div key={ind}>
                    <input onChange={(e) => storeValue(e.target.value, index)} type="radio" id={`${option}to${ind}`} value={option} name={`${index}`} />
                    <label htmlFor={`${option}to${ind}`}>{option}</label>
                  </div>
                ))
              }



            </div>
          ))
        ) : <h1>This is your Score {`${score} / ${indiaQuiz.length}`}</h1>

        }

        <button className='border-2 py-1 m-auto px-5 rounded-md mb-2'
          onClick={checkResult}
        >
          Submit
        </button>

      </div>
    </>
  )
}

export default App
