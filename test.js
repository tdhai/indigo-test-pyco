const RotatePicture = require('./rotatePicture/rotatePicture');
const assert = require('assert');
const productRecommendation = require('./productRecommendation/productRecommendation')

describe('Rotate picture square test case', () => {
  const picture = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  const rotateMatrix = new RotatePicture(picture);
  it('Return error when do not times, or negative number', function () {

    const result = rotateMatrix.rotateNTimes()
    assert.deepEqual(result, Error('times is not a even number'))
  });

  it(`rotate picture successfull, or number of times is even number`, () => {
    const result = rotateMatrix.rotateNTimes(4)
    assert.equal(result, picture)
  });
});

describe("Product recommendation test case", () => {
  const recommendation = new productRecommendation()
  const inputWrong = {
    age: "ÄBC",
    student: "äs",
    income: 123
  }
  it("return error when input not right", () => {
    const result = recommendation.productRecommendation(inputWrong.age, inputWrong.student, inputWrong.income)
    assert.deepEqual(result, Error('input empty or age > 17 but income = 0'))
  })

  const inputWrongIncome = {
    age: 22,
    student: "no",
    income: 0
  }

  it("return error when input wrong income", () => {
    const result = recommendation.productRecommendation(inputWrongIncome.age, inputWrongIncome.student, inputWrongIncome.income)
    assert.deepEqual(result, Error('input empty or age > 17 but income = 0'))
  })

  const inputBundle0 = {
    age: "16",
    student: "yes",
    income: 0
  }
  it("bundle = 0", () => {
    const result = recommendation.productRecommendation(inputBundle0.age, inputBundle0.student, inputBundle0.income)
    assert.equal(result, 0)
  })

  const inputBundle1 = {
    age: "22",
    student: "no",
    income: 2
  }
  it("bundle = 1", () => {
    const result = recommendation.productRecommendation(inputBundle1.age, inputBundle1.student, inputBundle1.income)
    assert.equal(result, 1)
  })

  const inputBundle2 = {
    age: "22",
    student: "no",
    income: 13000
  }
  it("bundle = 2", () => {
    const result = recommendation.productRecommendation(inputBundle2.age, inputBundle2.student, inputBundle2.income)
    assert.deepEqual(result, 2)
  })

  const inputBundle3 = {
    age: "22",
    student: "no",
    income: 44000
  }
  it("bundle = 3", () => {
    const result = recommendation.productRecommendation(inputBundle3.age, inputBundle3.student, inputBundle3.income)
    assert.deepEqual(result, 3)
  })
})