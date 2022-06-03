import { number } from "mathjs";


const convertDecimalFractionProblem = () => {
    var question;
    var answer;
    const numerator = parseInt(Math.random() * 200 + 1)
    const denominator = parseInt(Math.random() * 200 + 1)
    question = "Convert " + numerator + "/" + denominator + " into Decimal Number?"
    answer = (numerator / denominator).toFixed(4)
    const prbVar = {
        numerator,
        denominator
    }
    return {
        question, answer, prbVar
    }
}
const convertDecimalFractionOptions = (prbVar) => {
    return [...Array(4)].map(() => {
        const numerator = parseInt(Math.random() * 100 + 1) + prbVar.numerator % (Math.random() * 100)
        const denominator = parseInt(Math.random() * 100 + 1) + + prbVar.denominator % (Math.random() * 100)
        const option = (numerator / denominator).toFixed(4)
        return option
    })
}
const listRationalNumbers = () => {
    var question;
    var answer = [];
    const max = parseInt(Math.random() * 30)
    const min = parseInt(Math.random() * 10)
    question = "List all rational numbers between " + min + " " + max;
    for (var i = min; i < max; i++) {
        answer.push(i)
    }
    return {
        question, answer
    }
}
const getRationalNumber = () => {
    const random = Math.random() * 100
    var number;
    if (random < 30) {
        const numerator = parseInt(Math.random() * 200 + 1)
        const denominator = parseInt(Math.random() * 200 + 1)
        number = numerator + "/" + denominator
    } else if (random < 60) {
        number = parseInt(Math.random() * (400) - 200)
    } else {
        // number 
    }

}
const getIrrationalNumbers = (limit) => {
    for (var i = 0; i < limit; i++) {

    }
}
const rationalIrrational = () => {
    var answer;
    var limit = 10
    const rationalNumbers = getRationalNumber(5)
    for (var i = 0; i < limit; i++) {
        randomNumber.push(getRationalNumber())
    }
    const irrationalNumbers = getIrrationalNumbers(5)
    const numbers = (rationalNumbers.concat(irrationalNumbers)).sort(() => Math.random() > 0.5)
    const randomNumber = numbers[parseInt(Math.random() * numbers.length)]
    var question = `
    From the Following list is ${randomNumber}
    ${numbers}
    `
    if (rationalNumbers.findIndex(randomNumber)) {
        answer = "rational"
    } else {
        answer = "irrational"
    }
    return {
        question, answer
    }

}
const rationalRepresentation = () => {

}
const correctStatements = () => {

}
const generateProblem = (type) => {
    let problem = {}
    if (type == 0) {
        problem = convertDecimalFractionProblem()
    } else if (type == 1) {
        problem = listRationalNumbers()
    } else if (type == 2) {
        problem = rationalIrrational()
    } else if (type == 3) {
        problem = rationalRepresentation()
    } else {
        problem = correctStatements()

    }
    problem = { ...problem, options: generateOptions(type, problem) }
    return {
        problem
    }
}
const generateOptions = (type, { prbVar, answer }) => {

    // if (type == 0) {
    //     return convertDecimalFractionOptions(prbVar, answer)
    // } else if (type == 1) {
    //     return listRationalNumbersOptions(prbVar, answer)
    // } else if (type == 2) {
    //     return rationalIrrationalOptions(prbVar, answer)
    // } else if (type == 3) {
    //     return rationalRepresentationOptions(prbVar, answer)
    // } else {
    //     return correctStatementsOptions(prbVar, answer)
    // }
    //  else if (type == 1) {
    //     problem = listRationalNumbers()
    // } else if (type == 2) {
    //     problem = rationalIrrational()
    // } else if (type == 3) {
    //     problem = rationalRepresentation()
    // } else {
    //     problem = correctStatements()

    // }
    var options = convertDecimalFractionOptions(prbVar)
    options[parseInt(Math.random() * options.length)] = answer
    return options
}
export {
    generateProblem,
    generateOptions
}