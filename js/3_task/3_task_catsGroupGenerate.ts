import { catFactory } from "../2_task/2_task_catFactory";
let count:number = +process.argv[2];
function catsGroupGenerate(n: number): Object[] {
  if(n === 0) return [{}];
  const catsArray = [];
  while (n > 0) {
    catsArray.push(catFactory());
    n--;
  }
  return catsArray;
}
console.log(catsGroupGenerate(count));
