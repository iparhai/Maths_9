import React, { useEffect } from 'react'
import Model1 from '../../../assessmentModels/Model1/Model1'
import Model2 from '../../../assessmentModels/Model2/Model2'

import PropertiesOfRealNumbers from './PropertiesOfRealNumbers'


export default function Ex_1_2(props) {

  const totalExcerciseTypes = 5
  const randomIndex = parseInt(Math.random() * totalExcerciseTypes)
  const [question, setQuestion] = React.useState()
  const [answer, setAnswer] = React.useState()
  const [options, setOptions] = React.useState()
  const handleProblem = (question, answer, options) => {
    setQuestion(question)
    setAnswer(answer)
    setOptions(options)
    return;
  }
  const excerciseTypes = {
    component: <PropertiesOfRealNumbers handleProblem={handleProblem} />
  }

  const handleSubmission = (selectedOption) => {
    if (checkAnswer(answer, selectedOption)) {
      props.onCorrectAnswer()
    } else {
      props.onWrongAnswer()
    }
    return;
  }
  const checkAnswer = (ans, sol) => {
    console.log(ans, sol)
    if (ans == sol)
      return true
    return false
  }
  const [model, setModel] = React.useState(null)
  useEffect(() => {
    if (!question || !options) return
    const prop = { question, handleClick: handleSubmission, options }
    const availableModels = [
      <Model1 prop={prop} />,
      <Model2 prop={prop} />
    ]
    // setModel(availableModels[parseInt(Math.random() * availableModels.length)])
    setModel(availableModels[0])
  }, [question, options])
  return (
    <div>
      <div>
        {excerciseTypes.component}
      </div>
      <div>
        {model ? model : null}
      </div>
    </div>
  )
}
