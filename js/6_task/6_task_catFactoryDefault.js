"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var _1_task_list_function_1 = require("./../1_task/1_task_list_function");
var list = new _1_task_list_function_1.List(['Dog', 'Alice', 'Wolf', 'Joker', 'Lucky'], [12, 3, 4, 21, 6, 23, 12, 3, 4, 2, 1, 3, 2], ['male', 'female', 'undefined'], [4, 3, 2, 4, 2], [12, 22, 31, 4, 5]);
exports.catFactoryDefault = function (optionObject) {
    if (optionObject === void 0) { optionObject = {}; }
    return __assign({ name: list.namesListItems, age: list.ageListItems, gender: list.genderListItems, legsCount: list.legsCountListItems, tailLength: list.tailLengthListItems }, optionObject);
};
console.log(exports.catFactoryDefault({ age: 2000, name: 'Alice', gender: 'female', legsCount: 1221, tailLength: 2211 }));
