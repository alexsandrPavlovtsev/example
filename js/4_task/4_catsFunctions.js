"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var _3_task_catsGroupGenerate_1 = require("../3_task/3_task_catsGroupGenerate");
var catsGroupcount = +process.argv[2] || 8;
var oldestCatsCount = +process.argv[3];
var youngestCatsCount = +process.argv[4];
var CatsStatistics = /** @class */ (function () {
    function CatsStatistics(catList) {
        this.catList = catList;
        this.catList = _3_task_catsGroupGenerate_1.catsGroupGenerate(8);
    }
    CatsStatistics.prototype.returnFemaleCats = function () {
        return this.catList.filter(function (el) { return el.gender === 'male'; });
    };
    CatsStatistics.prototype.returnNames = function () {
        return this.catList.map(function (el) { return el['name']; });
    };
    CatsStatistics.prototype.filterCatsByAge = function (type) {
        var catsSortList = __spreadArrays(this.catList);
        if (type === 'older') {
            return catsSortList.sort(function (a, b) {
                return b.age - a.age;
            });
        }
        return catsSortList.sort(function (a, b) {
            return a.age - b.age;
        });
    };
    CatsStatistics.prototype.filterCatsByGender = function () {
        return this.filterCatsByAge('younger').filter(function (c) { return c.gender === 'female'; });
    };
    CatsStatistics.prototype.returnOldestCats = function (n) {
        var oldestCats = this.filterCatsByAge('older');
        if (oldestCats.length > 0) {
            if (oldestCats.length === n)
                return oldestCats;
            else if (oldestCats.length > n)
                return oldestCats.slice(0, n);
            else
                return oldestCats;
        }
        else
            return 'Sorry there are no cats in the list';
    };
    CatsStatistics.prototype.returnNamesYoungerCats = function (n) {
        var femaleCats = this.filterCatsByGender();
        var femaleCatsLength = femaleCats.length;
        if (femaleCatsLength > n)
            femaleCatsLength = n;
        if (femaleCatsLength > 0) {
            if (n > 0) {
                var femaleYongestName = [];
                console.log('===============', femaleCats);
                for (var i = 0; i < femaleCatsLength; i++) {
                    femaleYongestName.push(femaleCats[i].name);
                }
                return femaleYongestName;
            }
            return 'Sorry there is no cats';
        }
        return 'Sorry there is no cats';
    };
    return CatsStatistics;
}());
exports.CatsStatistics = CatsStatistics;
// const catsStatistics = new CatsStatistics(catsGroupGenerate(catsGroupcount));
// console.log(catsStatistics.returnFemaleCats())
// console.log(catsStatistics.returnNames())
// console.log(catsStatistics.returnOldestCats(oldestCatsCount));
// console.log(catsStatistics.returnNamesYoungerCats(youngestCatsCount))
