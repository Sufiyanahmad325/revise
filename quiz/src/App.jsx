import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [selectOption, setSelectOption] = useState(null)


  const handleOptionClick = (option) => {
    setSelectOption(option)
    if (option == indiaQuiz[currentIndex].answer) {
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
        if(currentIndex < indiaQuiz.length-1){
          setCurrentIndex(prev=> prev+1)
          setSelectOption(null)
        }
    }, 1000);
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>

        <div className='flex flex-col items-center gap-8 border-2 py-8 px-4'>

          <h1 className='text-2xl'>{currentIndex<indiaQuiz.length-1 ? indiaQuiz[currentIndex].question : `This is your score`}</h1>

         {
          currentIndex<indiaQuiz.length-1?
          <>
           <div className='flex gap-3'>
            {
              indiaQuiz[currentIndex].options.map((option, ind) => {
                let bgColor = 'bg-blue-200';

                if (selectOption) {
                  if (option == indiaQuiz[currentIndex].answer) {
                    bgColor = 'bg-green-500'
                  }
                  else if (selectOption == option) {
                    bgColor = 'bg-red-600'
                  }
                }

                return <button key={ind}
                  onClick={() => !selectOption && handleOptionClick(option)}
                  className={`text-[22px] border py-1 px-3 rounded-[4px] ${bgColor}`}
                >
                  {option}
                </button>

              })
            }
          </div>
          </>
          :<p className='mt-4 text-lg text-green-950'>{`${score} / ${indiaQuiz.length}`}</p>
         }

          


        </div>

      </div>
    </>
  )
}

export default App
