const RotatePicture = require('./rotatePicture');

const picture = [[1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]];
const K = 1;

const rotatePicture = new RotatePicture(picture);
const result = rotatePicture.rotatePictureNTimes(K);
console.log(`Rotate picture ${K} times: `, result);
