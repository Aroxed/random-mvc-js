export class ViewRandomNumber {
  constructor(randomNumber) {
      this.randomNumber = randomNumber;
  }

  toHtml() {
    const color = (this.randomNumber.Value < 50) ? 'red': 'blue'; 
    return `<p style='color: ${color}' id=${this.randomNumber.id}>${this.randomNumber.Value}&nbsp;</p>`;
  }
}

export class ViewRandomNumberList {
  constructor(randomNumberList) {
      this.randomNumberList = randomNumberList;
      
  }

  addClickHandler(htmlId, clickHandlerFunction) {
    document.getElementById(htmlId).addEventListener('click', ()=>clickHandlerFunction());
  }

  toHtml() {
      let result = "";
      for (let randomNumber of this.randomNumberList.randomNumbers) {
          const viewRandomNumber = new ViewRandomNumber(randomNumber);
          result = result + viewRandomNumber.toHtml();
      }
      return result;
  }

  updatePage() {
    document.getElementById('random_numbers').innerHTML = this.toHtml();
    document.getElementById('sum').innerHTML = this.randomNumberList.sum();
  }
}