import { Cat } from "../2_task/2_task_catFactory";
import { catsGroupGenerate } from "../3_task/3_task_catsGroupGenerate";

class CatsNameStats {
  constructor(private catsList: Cat[]) {
    this.catsList = catsList;
  }
  calculateSpreading(): object {
    const namesArr = this.returnNames();
    const dogsObject = { };
    for (let i = 0, j = namesArr.length; i < j; i++) {
      if (dogsObject[namesArr[i]]) {
          dogsObject[namesArr[i]]++;
      }
      else {
          dogsObject[namesArr[i]] = 1;
      }
    }
    return dogsObject;
  }
  returnNames(): string[] {
    return this.catsList.map(el => el["name"]);
  }
  get CatList() {
    return this.catsList;
  }
}
const catsNameStats = new CatsNameStats(catsGroupGenerate(10));
catsNameStats.calculateSpreading();
