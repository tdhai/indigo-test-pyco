const rotatePicture = require('./rotatePicture/rotatePicture');
const assert = require('assert');
const productRecommendation = require('./productRecommendation/productRecommendation')
const reservation = require('./hotelReservation/hotelReservation');

describe('Rotate picture square test case', () => {
  const picture = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  const rotateMatrix = new rotatePicture(picture);
  it('Return error when do not times, or negative number',  () => {

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

describe("Hotel reservation test case", ()=>{
       const listArrialTime= [1,5];
       const badListArrialTime = [8,88]
       const listDepartureTime= [2,6];
       const badListDepartureTime = [9,99]
       const k= 1
    
  it("check room sucessfull", ()=>{
    const result = reservation(listArrialTime, listDepartureTime, k)
    assert.equal(result, true)
  })
  
  it("check room do not departure time should be sucessfull", ()=>{
    const result = reservation(listDepartureTime, [], k)
    assert.deepEqual(result, true)
  })

  it("check room do not arrial time should be sucessfull", ()=>{
    const result = reservation([], listDepartureTime, k)
    assert.deepEqual(result, true)
  })

  it("check room do not arrial and departure time should be sucessfull", ()=>{
    const result = reservation([], [], k)
    assert.deepEqual(result, true)
  })

  it("check room do not quantity should error", ()=>{
    const result = reservation(listArrialTime, listDepartureTime)
    assert.deepEqual(result, Error('Invalid number of rooms'))
  })

  it("check room list arrial wrong should false", ()=>{
    const result = reservation(badListArrialTime, listDepartureTime, k)
    assert.deepEqual(result, Error('Please check arrial time and departure time again!'))
  })
})