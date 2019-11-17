const validator = require("validator")
const student = {
  yes: "yes",
  no: "no"
}
class ProductRecommendation {
  productRecommendation(age, student, income) {
    if (isNaN(age) || validator.isEmpty(student) || isNaN(income) ||
        age > 17 && income === 0 ) {
      return new Error('input empty or age > 17 but income = 0')
    }
    if (age < 18 && student ||
      age > 17 && student === student.yes) {
      return  0
    }
    if (age > 17 && income >= 0 && income <= 11999) {
      return  1
    }
    if (age > 17  && income > 12000 && income <= 39999) {
      return  2
    }
    if (age > 17  && income > 40000) {
      return 3
    }
  }
}

module.exports = ProductRecommendation;

