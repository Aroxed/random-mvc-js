export class RandomNumber {
  constructor() {
    this.value = Math.round(Math.random() * 100);
    this.id = Math.random().toString();
  }

  get Value() {
    return this.value
  }
}

export class RandomNumberList {
  constructor() {
    this.randomNumbers = [];
  }

  add() {
    const randomNumber = new RandomNumber();
    this.randomNumbers.push(randomNumber);
  }

  sum() {
    let sum = 0;
    for (let i=0; i<this.randomNumbers.length; i++) {
      sum += this.randomNumbers[i].Value;
    }
    return sum;
  }

  findRandomNumberIndexById(id) {
    return this.randomNumbers.findIndex( (randomNumber)=> randomNumber.id == id );
  }

  findFirstGreaterThan50Index() {
    return this.randomNumbers.findIndex( (randomNumber)=> randomNumber.Value > 50 );
  }

  delete(id) {
    const randomNumberIndex = this.findRandomNumberById(id);
    if (randomNumberIndex === -1) return false;
    this.randomNumbers.delete(randomNumberIndex);
    return true;
  }

  deleteGreaterThan50() {
    let foundIndex = 0;
    while (foundIndex > -1) {
      foundIndex = this.findFirstGreaterThan50Index();
      if (foundIndex > -1) { 
        this.randomNumbers.splice(foundIndex, 1);
      }
    }
  }
} 