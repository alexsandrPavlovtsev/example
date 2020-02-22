import { List } from "./../1_task/1_task_list_function";
const list = new List(
  ["jojo", "Alex", "Kdas", "asca", "Man", "Wooman"],
  [12, 3322, 134, 665]
);
export function catFactory(): Object {
  return {
    name: list.namesListItems,
    age: list.numberListItems,
    gender: list.namesListItems,
    legsCount: list.numberListItems,
    tailLength: list.numberListItems
  };
}
