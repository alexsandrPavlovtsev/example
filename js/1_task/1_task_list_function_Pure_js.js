class List {
  constructor(list){
    this.list = list;
  }
  get listItems() {
    const i = Math.floor(Math.random() * this.list.length)
    return this.list[i];
  }
}

