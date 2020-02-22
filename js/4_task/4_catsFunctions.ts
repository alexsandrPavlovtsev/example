import { Cat } from './../2_task/2_task_catFactory';
import { catsGroupGenerate } from '../3_task/3_task_catsGroupGenerate';
const catsGroupcount:number = +process.argv[2];
const oldestCatsCount:number = +process.argv[3];
const youngestCatsCount:number = +process.argv[4];

class CatsStatistics {
  constructor(private catList: Cat[]) {
    this.catList = catsGroupGenerate(catsGroupcount);
  }
  returnFemaleCats(): Cat[] {
    return this.catList.filter(el => el.gender === 'male');
  }
  returnNames(): string[] {
    return this.catList.map((el) => el['name']);
  }
  filterCatsByAge(type: string): Cat[] {
    const catsSortList = [...this.catList];
    if(type === 'older') {
      return catsSortList.sort((a, b) => {
        return b.age - a.age
      })
    }
      return catsSortList.sort((a, b) => {
        return a.age - b.age;
      })
  }
  filterCatsByGender(): Cat[] {
    return this.filterCatsByAge('younger').filter(c => c.gender === 'female');
  }
  returnOldestCats(n: number): Cat[] | string {
    const oldestCats = this.filterCatsByAge('older');
    if (oldestCats.length > 0) {
      if(oldestCats.length === n) return oldestCats;
      else if (oldestCats.length > n) return oldestCats.slice(0,n);
      else return oldestCats;
    }
    else return 'Sorry there are no cats in the list';
  }
  returnNamesYoungerCats(n: number): string[] | string {
    const femaleCats = this.filterCatsByGender();
    let femaleCatsLength = femaleCats.length;
    if(femaleCatsLength > n) femaleCatsLength = n;
    if(femaleCatsLength > 0) {
      if(n > 0) {
        let femaleYongestName: string[] = [];
        console.log('===============', femaleCats);
          for (let i = 0; i < femaleCatsLength; i++) {
              femaleYongestName.push(femaleCats[i].name);
          }
        return femaleYongestName;
      }
      return 'Sorry there is no cats';
    }
    return 'Sorry there is no cats';
  }
}
const catsStatistics = new CatsStatistics(catsGroupGenerate(catsGroupcount));
// console.log(catsStatistics.returnFemaleCats())
// console.log(catsStatistics.returnNames())
// console.log(catsStatistics.returnOldestCats(oldestCatsCount));
console.log(catsStatistics.returnNamesYoungerCats(youngestCatsCount))
