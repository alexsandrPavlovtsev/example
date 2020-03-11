import { List } from "./../1_task/1_task_list_function";
import { Cat } from "../2_task/2_task_catFactory";

const list = new List(
['Dog', 'Alice', 'Wolf', 'Joker', 'Lucky'],
[12,3,4,21,6,23,12,3,4,2,1,3,2],
['male', 'female','undefined'],
[4,3,2,4,2],
[12,22,31,4,5]
);
export const catFactoryDefault = (optionObject: object = {}): Cat => {
  return {
    name: list.namesListItems,
    age: list.ageListItems,
    gender: list.genderListItems,
    legsCount: list.legsCountListItems,
    tailLength: list.tailLengthListItems,
    ...optionObject
  }
}
console.log(catFactoryDefault({age: 2000, name: 'Alice', gender: 'female', legsCount: 1221, tailLength: 2211}));
