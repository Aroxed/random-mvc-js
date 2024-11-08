import { RandomNumberList } from "./model.js";
import { ViewRandomNumberList } from "./view.js";

export class Controller {
    constructor() {
        this.randomNumberList = new RandomNumberList();
        this.viewRandomNumberList = new ViewRandomNumberList(this.randomNumberList);
        this.viewRandomNumberList.addClickHandler('generate', ()=>this.add()); 
        this.viewRandomNumberList.addClickHandler('delete_blue', ()=>this.deleteBlue()); 
    }

    add() {
      this.randomNumberList.add();
      this.viewRandomNumberList.updatePage();
    }

    updatePage() {
      this.viewRandomNumberList.updatePage();
    }

    deleteBlue() {
      this.randomNumberList.deleteGreaterThan50();
      this.viewRandomNumberList.updatePage();
    }
  }