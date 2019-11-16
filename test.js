const RotatePicture = require('./rotatePicture/rotatePicture');
const assert = require('assert');

describe('Rotate picture square test case', () => {
  const picture = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  it('Return error when do not times, or negative number', function () {
    const rotateMatrix = new RotatePicture(picture);
    const result =rotateMatrix.rotatePictureNTimes()
    assert.deepEqual(result,Error('times is not a even number'))
  });

  it(`rotate picture successfull, or number of times is even number`, () => {
    const rotateMatrix = new RotatePicture(picture);
    const result =rotateMatrix.rotatePictureNTimes(4)
    assert.equal(result, picture)
  });
});
