"use strict";
exports.__esModule = true;
var CatsNameStats = /** @class */ (function () {
    function CatsNameStats(catsList) {
        this.catsList = catsList;
        this.catsList = catsList;
    }
    CatsNameStats.prototype.calculateSpreading = function () {
        var namesArr = this.returnNames();
        var dogsObject = {};
        for (var i = 0, j = namesArr.length; i < j; i++) {
            if (dogsObject[namesArr[i]]) {
                dogsObject[namesArr[i]]++;
            }
            else {
                dogsObject[namesArr[i]] = 1;
            }
        }
        return dogsObject;
    };
    CatsNameStats.prototype.returnNames = function () {
        return this.catsList.map(function (el) { return el["name"]; });
    };
    Object.defineProperty(CatsNameStats.prototype, "CatList", {
        get: function () {
            return this.catsList;
        },
        enumerable: true,
        configurable: true
    });
    return CatsNameStats;
}());
exports.CatsNameStats = CatsNameStats;
// const catsNameStats = new CatsNameStats(catsGroupGenerate(10));
// catsNameStats.calculateSpreading();
