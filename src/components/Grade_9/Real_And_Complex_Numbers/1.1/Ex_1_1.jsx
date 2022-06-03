import React, { useEffect } from 'react'
import Model1 from '../../../assessmentModels/Model1/Model1'
import Model2 from '../../../assessmentModels/Model2/Model2'
import ConversionDecimalFractions from './ConversionDecimalFractions'
import CorrectStatements from './CorrectStatements'
import ListRationalNumbers from './ListRationalNumbers'
import RationalIrrational from './RationalIrrational'
import RationalRepresentation from './RationalRepresentation'

export default function Ex_1_1(props) {


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
  const excerciseTypes = [{
    component: <ConversionDecimalFractions handleProblem={handleProblem} />
  }, {
    component: <CorrectStatements handleProblem={handleProblem} />
  }, {
    component: <ListRationalNumbers handleProblem={handleProblem} />
  }, {
    component: <RationalRepresentation handleProblem={handleProblem} />
  }, {
    component: <RationalIrrational handleProblem={handleProblem} />
  }]
  const randomExcerciseType = excerciseTypes[0]


  const handleSubmission = (selectedOption) => {
    if (checkAnswer(answer, selectedOption)) {
      props.onCorrectAnswer()
    } else {
      props.onWrongAnswer()
    }
    return;
  }
  const checkAnswer = (ans, sol) => {
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
    setModel(availableModels[1])
  }, [question, options])
  return (
    <div>
      <div>
        {randomExcerciseType.component}
      </div>
      <div>
        {model ? model : null}
      </div>
    </div>
  )
}
