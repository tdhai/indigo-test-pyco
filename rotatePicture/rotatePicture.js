class RotatePicture {
  constructor(picture = [[]]) {
    this.cPicture = picture;
    this.cPictureLength = picture.length;
  }

  transpose() {
    for (let row = 0; row < this.cPictureLength; row++) {
      for (let col = row; col < this.cPictureLength; col++) {
        [this.cPicture[row][col], this.cPicture[col][row]] = 
        [this.cPicture[col][row], this.cPicture[row][col]];
      }
    }
  }

  rotate() {
    this.transpose()
    for (let row = 0; row < this.cPictureLength; row++) {
      for (
        let startCol = 0, desCol = this.cPictureLength - 1;
        startCol < desCol;
        startCol++, desCol--
      ) {
        [this.cPicture[row][startCol], this.cPicture[row][desCol]] = 
        [this.cPicture[row][desCol], this.cPicture[row][startCol]];
      }
    }
  }

  rotateNTimes(times) {
    if (isNaN(times) || times < 0) {
      return new Error('times is not a even number');
    }
    let rotateTimes = times % 4;
    for (let i = 0; i < rotateTimes; i++) {
      this.rotate();
    }
    return this.cPicture
  }
}

module.exports = RotatePicture;
