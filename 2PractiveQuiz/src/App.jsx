import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedValue, setSelectedValue] = useState(null)

  const handleQuiz = (option) => {
    setSelectedValue(option)
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>

        <div className='flex flex-col gap-5 border-2 py-3 px-7 rounded-md'>

          <h1 className='text-2xl font-bold text-green-700 text-center'>{indiaQuiz[currentIndex].question}</h1>

          <div className='flex gap-3 justify-center'>
            {
              indiaQuiz[currentIndex].options.map((option, index) => {
                let bgColor = ''
                if (selectedValue) {
                  if (selectedValue == indiaQuiz[currentIndex].answer && option === indiaQuiz[currentIndex].answer) {
                    bgColor = 'bg-green-800 text-white'
                  } else if (selectedValue == option) {
                    bgColor = 'bg-red-700'
                  }
                }


                return <button
                  onClick={() => !selectedValue && handleQuiz(option)}
                  className={`border-2 py-1 px-3 font-bold rounded-md ${bgColor}`} >{option}</button>
              })
            }

          </div>

        </div>

      </div>
    </>
  )
}

export default App
