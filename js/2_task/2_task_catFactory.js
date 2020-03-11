"use strict";
exports.__esModule = true;
var _1_task_list_function_1 = require("./../1_task/1_task_list_function");
var list = new _1_task_list_function_1.List(['Dog', 'Alice', 'Akira', 'Rembo', 'Lucky'], [12, 3, 4, 5, 6, 7, 12, 3, 4, 2, 1, 3, 2], ['male', 'female', 'undefined'], [4, 3, 2, 4, 2], [12, 22, 31, 4, 5]);
function catFactory() {
    return {
        name: list.namesListItems,
        age: list.ageListItems,
        gender: list.genderListItems,
        legsCount: list.legsCountListItems,
        tailLength: list.tailLengthListItems
    };
}
exports.catFactory = catFactory;
