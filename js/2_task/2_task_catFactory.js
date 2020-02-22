"use strict";
exports.__esModule = true;
var _1_task_list_function_1 = require("./../1_task/1_task_list_function");
var list = new _1_task_list_function_1.List(['jojo', 'Alex', 'Kdas', 'asca', 'Man', 'Wooman'], [12, 3322, 134, 665]);
function catFactory() {
    return {
        name: list.namesListItems,
        age: list.numberListItems,
        gender: list.namesListItems,
        legsCount: list.numberListItems,
        tailLength: list.numberListItems
    };
}
exports.catFactory = catFactory;
