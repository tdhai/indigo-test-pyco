const productRecommendation = require('./productRecommendation')

const age = 22
const student = "no"
const income = 10000

const recommendation = new productRecommendation()
const result = recommendation.productRecommendation(age, student, income)
console.log("Result: ", result)