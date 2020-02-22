interface ListInterface {
  readonly namesList: string[];
  readonly ageList: number[];
  readonly genderList: string[];
  readonly legsCountList: number[];
  readonly tailLengthList: number[];
}
export class List implements ListInterface {
  constructor(public namesList: string[],
    public ageList: number[],public genderList: string[],
    public legsCountList: number[],public tailLengthList: number[] )
    {
    this.namesList = namesList;
    this.ageList = ageList;
    this.genderList = genderList;
    this.legsCountList = legsCountList;
    this.tailLengthList = tailLengthList;
  }
  get namesListItems() {
    const i = Math.floor(Math.random() * this.namesList.length);
    return this.namesList[i];
  }
  get ageListItems() {
    const i = Math.floor(Math.random() * this.ageList.length);
    return this.ageList[i];
  }
  get genderListItems() {
    const i = Math.floor(Math.random() * this.genderList.length);
    return this.genderList[i];
  }
  get legsCountListItems() {
    const i = Math.floor(Math.random() * this.legsCountList.length);
    return this.legsCountList[i];
  }
  get tailLengthListItems() {
    const i = Math.floor(Math.random() * this.tailLengthList.length);
    return this.tailLengthList[i];
  }
}
// const newList = new List(['Hello', 'Alex', 'Unnamed'], [1,322,456,3221,4]);
// console.log(newList.namesListItems);
// console.log(newList.numberListItems);
