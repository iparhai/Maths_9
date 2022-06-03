import React, { useEffect, useState } from 'react'
import { generateProblem } from './problemGenerator'

export default function ListRationalNumbers({ handleProblem }) {

    const [{ problem }, setProblem] = useState(generateProblem(0))
    const { question, answer, options } = problem

    useEffect(() => {
        if (!problem) return
        handleProblem(question, answer, options)
    }, [problem])
    
    return (
        <div>
        </div>
    )
}
