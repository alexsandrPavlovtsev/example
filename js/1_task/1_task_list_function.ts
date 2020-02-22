export class List {
  constructor(private namesList: string[], private numberList: number[]){
    this.namesList = namesList;
    this.numberList = numberList;
  }
  get namesListItems() {
    const i = Math.floor(Math.random() * this.namesList.length);
    return this.namesList[i];
  }
  get numberListItems() {
    const i = Math.floor(Math.random() * this.numberList.length);
    return this.numberList[i];
  }
}
// const newList = new List(['Hello', 'Alex', 'Unnamed'], [1,322,456,3221,4]);
// console.log(newList.namesListItems);
// console.log(newList.numberListItems);
