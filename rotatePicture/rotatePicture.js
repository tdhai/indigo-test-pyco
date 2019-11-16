class RotatePicture {
  constructor(matrix = [[]]) {
    this.cMatrix = matrix;
    this.cMatrixLength = matrix.length;
  }

  transpose() {
    for (let row = 0; row < this.cMatrixLength; row++) {
      for (let col = row; col < this.cMatrixLength; col++) {
        [this.cMatrix[row][col], this.cMatrix[col][row]] = 
        [this.cMatrix[col][row], this.cMatrix[row][col]];
      }
    }
  }

  rotatePicture() {
    this.transpose()
    for (let row = 0; row < this.cMatrixLength; row++) {
      for (
        let startCol = 0, desCol = this.cMatrixLength - 1;
        startCol < desCol;
        startCol++, desCol--
      ) {
        [this.cMatrix[row][startCol], this.cMatrix[row][desCol]] = 
        [this.cMatrix[row][desCol], this.cMatrix[row][startCol]];
      }
    }
  }

  rotatePictureNTimes(times) {
    if (isNaN(times) || times < 0) {
      return new Error('times is not a even number');
    }
    let rotateTimes = times % 4;
    for (let i = 0; i < rotateTimes; i++) {
      this.rotatePicture();
    }
    return this.cMatrix
  }
}

module.exports = RotatePicture;
