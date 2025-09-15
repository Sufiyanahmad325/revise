import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [quizQuestion, setQuizQuestion] = useState([
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: [
        { ans: "var", isCorrect: true },
        { ans: "int", isCorrect: false },
        { ans: "let", isCorrect: false },
        { ans: "const", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        { ans: "String", isCorrect: false },
        { ans: "Number", isCorrect: false },
        { ans: "Boolean", isCorrect: false },
        { ans: "Float", isCorrect: true }
      ]
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: [
        { ans: "<!-- comment -->", isCorrect: false },
        { ans: "// comment", isCorrect: true },
        { ans: "/* comment */", isCorrect: false },
        { ans: "# comment", isCorrect: false }
      ]
    },
    // {
    //   question: "Which method is used to convert JSON to an object?",
    //   options: [
    //     { ans: "JSON.parse()", isCorrect: true },
    //     { ans: "JSON.stringify()", isCorrect: false },
    //     { ans: "parse.JSON()", isCorrect: false },
    //     { ans: "object.JSON()", isCorrect: false }
    //   ]
    // },
    // {
    //   question: "What is the output of: console.log(typeof null)?",
    //   options: [
    //     { ans: "null", isCorrect: false },
    //     { ans: "undefined", isCorrect: false },
    //     { ans: "object", isCorrect: true },
    //     { ans: "string", isCorrect: false }
    //   ]
    // },
    // {
    //   question: "Which symbol is used for strict equality comparison?",
    //   options: [
    //     { ans: "==", isCorrect: false },
    //     { ans: "===", isCorrect: true },
    //     { ans: "!=", isCorrect: false },
    //     { ans: "=", isCorrect: false }
    //   ]
    // },
    // {
    //   question: "Which array method is used to add elements at the end?",
    //   options: [
    //     { ans: "push()", isCorrect: true },
    //     { ans: "pop()", isCorrect: false },
    //     { ans: "shift()", isCorrect: false },
    //     { ans: "unshift()", isCorrect: false }
    //   ]
    // },
    // {
    //   question: "What does the isNaN() function check?",
    //   options: [
    //     { ans: "Is Not a Name", isCorrect: false },
    //     { ans: "Is Not a Null", isCorrect: false },
    //     { ans: "Is Not a Number", isCorrect: true },
    //     { ans: "Is Null a Number", isCorrect: false }
    //   ]
    // },
    // {
    //   question: "Which keyword is used to define a constant in JavaScript?",
    //   options: [
    //     { ans: "let", isCorrect: false },
    //     { ans: "var", isCorrect: false },
    //     { ans: "const", isCorrect: true },
    //     { ans: "static", isCorrect: false }
    //   ]
    // },
    // {
    //   question: "Which company developed JavaScript?",
    //   options: [
    //     { ans: "Microsoft", isCorrect: false },
    //     { ans: "Sun Microsystems", isCorrect: false },
    //     { ans: "Netscape", isCorrect: true },
    //     { ans: "Oracle", isCorrect: false }
    //   ]
    // }
  ]
  )
  const [index, setIndex] = useState(0)
  const [showColor, setShowColor] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (optionObj) => {
    setShowColor(true)

    let a = setTimeout(() => {
      if (optionObj.isCorrect) {
        setScore(prev => prev + 1)
      }
      if (index < quizQuestion.length-1) {
        setIndex(prev => prev + 1)
      } else {
        setShowResult(true)
      }
      setShowColor(false)
    }, 1000)

  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        {
          <div className='bg-gray-500 w-[700px] py-5 px-5 flex flex-col justify-center items-center gap-5'>
            {
              showResult == true ? (
                <div>Score {score} / {quizQuestion.length}</div>
              ) : <>
                <h1 className='font-bold text-[22px] '>{quizQuestion[index].question}</h1>
                <div className='flex gap-3'>
                  {
                    quizQuestion[index].options.map((option, ind) => (
                      <button key={ind}
                        onClick={() => handleSubmit(option)}
                        className={`bg-blue-100 px-4 py-1 border-1 rounded-md font-bold 
                   ${showColor == true ? option.isCorrect ? 'bg-green-700' : 'bg-red-500' : null}
                   `}
                      >
                        {option.ans}
                      </button>
                    ))
                  }
                </div>
              </>
            }
          </div>
        }
      </div>
    </>
  )
}

export default App
