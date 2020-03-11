"use strict";
exports.__esModule = true;
var _2_task_catFactory_1 = require("../2_task/2_task_catFactory");
var count = +process.argv[2];
function catsGroupGenerate(n) {
    if (n === 0)
        return;
    var catsArray = [];
    while (n > 0) {
        catsArray.push(_2_task_catFactory_1.catFactory());
        n--;
    }
    return catsArray;
}
exports.catsGroupGenerate = catsGroupGenerate;
// console.log(catsGroupGenerate(count));
