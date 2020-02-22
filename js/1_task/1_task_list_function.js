"use strict";
exports.__esModule = true;
var List = /** @class */ (function () {
    function List(namesList, numberList) {
        this.namesList = namesList;
        this.numberList = numberList;
        this.namesList = namesList;
        this.numberList = numberList;
    }
    Object.defineProperty(List.prototype, "namesListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.namesList.length);
            return this.namesList[i];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numberListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.numberList.length);
            return this.numberList[i];
        },
        enumerable: true,
        configurable: true
    });
    return List;
}());
exports.List = List;
// const newList = new List(['Hello', 'Alex', 'Unnamed'], [1,322,456,3221,4]);
// console.log(newList.namesListItems);
// console.log(newList.numberListItems);
