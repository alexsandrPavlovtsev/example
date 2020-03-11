import { Cat } from './../2_task/2_task_catFactory';
import { catFactory } from "../2_task/2_task_catFactory";
let count:number = +process.argv[2];
export function catsGroupGenerate(n: number = 5): Cat[] {
  if(n === 0) return;
  const catsArray = [];
  while (n > 0) {
    catsArray.push(catFactory());
    n--;
  }
  return catsArray;
}
// console.log(catsGroupGenerate(count));
