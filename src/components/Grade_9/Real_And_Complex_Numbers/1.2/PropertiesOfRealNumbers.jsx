import React, { useEffect, useState } from 'react'
import { generateProblem } from './problemGenerator'

export default function PropertiesOfRealNumbers({ handleProblem }) {
    const [{ problem }, setProblem] = useState(generateProblem())
    const { question, answer, options, probVar } = problem

    useEffect(() => {
        if (!problem) return
        console.log(problem)
        handleProblem(question, answer, options)
    }, [problem])

    return (
        <div>
        </div>
    )
}
