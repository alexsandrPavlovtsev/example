"use strict";
exports.__esModule = true;
var _2_task_catFactory_1 = require("../2_task/2_task_catFactory");
// import {catFactory} from '../2_task/2_task_catFactory';
function catsGroupGenerate(n) {
    console.log(_2_task_catFactory_1.catFactory());
    var catsArray = [];
    while (n > 0) {
        catsArray.push(_2_task_catFactory_1.catFactory());
        n--;
    }
    return catsArray;
}
console.log(catsGroupGenerate(10));
