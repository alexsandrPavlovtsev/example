import { List } from "./../1_task/1_task_list_function";
export interface Cat {
  name: string;
  age: number;
  gender: string;
  legsCount: number;
  loudness?: boolean;
  tailLength: number;
}
const list = new List(
['Dog', 'Alice', 'Akira', 'Rembo', 'Lucky'],
[12,3,4,5,6,7,12,3,4,2,1,3,2],
['male', 'female','undefined'],
[4,3,2,4,2],
[12,22,31,4,5]
);
export function catFactory(): Cat {
  return {
    name: list.namesListItems,
    age: list.ageListItems,
    gender: list.genderListItems,
    legsCount: list.legsCountListItems,
    tailLength: list.tailLengthListItems
  };
}
