import { add, e, number } from "mathjs";
import nerdamer from "nerdamer/all";
import { buildTree, getAssociativeOptions, getSimilarEquation, printTree, solveAssociation } from "./Equation";

const getAssociativeProblem = (level, op) => {
    const equationTree = buildTree(level, op)
    const equation = equationTree.toString()
    var similarEquation = getSimilarEquation(equation)
    while (equation == similarEquation) {
        similarEquation = getSimilarEquation(equation)
    }
    const question = "Correct Associative Property of " + equation + " ?"
    const prbVar = {
        equation,
        similarEquation
    }
    var options = getAssociativeOptions(equation)
    const randomIndex = parseInt(Math.random() * options.length)
    options[randomIndex] = similarEquation
    options[randomIndex < options.length - 1 ? randomIndex + 1 : randomIndex - 1] = equation
    return {
        question,
        answer: similarEquation,
        prbVar,
        options
    }
}

const getAdditionAssociative = () => {
    return getAssociativeProblem(3, ['+'])
    // console.log("solution", nerdamer.solve(equation,'x'))
}
const getAdditionClosure = () => {

}
const getAdditionCommutative = () => {

}
const getAdditionAdditive = () => {

}
const getAdditionAdditiveInverse = () => {

}
const realNumPropAddition = {
    ASSOCIATIVE: () => getAdditionAssociative(),
    // CLOSURE: () => getAdditionClosure(),
    // COMMUTATIVE: () => getAdditionCommutative(),
    // ADDITIVE: () => getAdditionAdditive(),
    // ADDITIVEINVERSE: () => getAdditionAdditiveInverse()
}

const getMultiAssociative = () => {
    return getAssociativeProblem(3, ['*'])
}
const getMultiClosure = () => {

}
const getMultiCommutative = () => {

}
const getMultiplicative = () => {

}
const getMultiplicativeInverse = () => {

}

const realNumPropMultiplication = {
    ASSOCIATIVE: () => getMultiAssociative(),
    // CLOSURE: () => getMultiClosure(),
    // COMMUTATIVE: () => getMultiCommutative(),
    // MULTIPLICATIVE: () => getMultiplicative(),
    // MULTIPLICATIVEINVERSE: () => getMultiplicativeInverse()
}
const recognizePropertiesOfRealNumbers = (property) => {
    return property()
}
const correctMissingRealNumber = (property) => {
    return null
}
const fillBlank = (property) => {
    return null
}
const calculateAdditiveOrMultiplicativeInverse = (property) => {
    return null
}

const generateProblem = () => {
    let problem = {}
    const type = 0 //parseInt(Math.random() * 4)
    const additiveObjectArray = Object.keys(realNumPropAddition).map(function (key, index) {
        return realNumPropAddition[key]
    })
    const multiObjectArray = Object.keys(realNumPropMultiplication).map(function (key, index) {
        return realNumPropMultiplication[key]
    })
    const randomAdditiveProperty = additiveObjectArray[parseInt(Math.random() * additiveObjectArray.length)]
    const randomMultiplicativeProperty = multiObjectArray[parseInt(Math.random() * multiObjectArray.length)]
    const randomProperty = Math.random() > 0.5 ? randomAdditiveProperty : randomMultiplicativeProperty
    // const randomProperty = additiveObjectArray[0]
    if (type == 0) {
        problem = recognizePropertiesOfRealNumbers(randomProperty)
    } else if (type == 1) {
        problem = correctMissingRealNumber()
    } else if (type == 2) {
        problem = fillBlank()
    } else {
        problem = calculateAdditiveOrMultiplicativeInverse()
    }
    return {
        problem
    }
}
const generateOptions = (type, problem) => {

    return null
}
export {
    generateProblem,
    generateOptions
}