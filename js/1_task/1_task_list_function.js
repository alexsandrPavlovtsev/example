"use strict";
exports.__esModule = true;
var List = /** @class */ (function () {
    function List(namesList, ageList, genderList, legsCountList, tailLengthList) {
        this.namesList = namesList;
        this.ageList = ageList;
        this.genderList = genderList;
        this.legsCountList = legsCountList;
        this.tailLengthList = tailLengthList;
        this.namesList = namesList;
        this.ageList = ageList;
        this.genderList = genderList;
        this.legsCountList = legsCountList;
        this.tailLengthList = tailLengthList;
    }
    Object.defineProperty(List.prototype, "namesListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.namesList.length);
            return this.namesList[i];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "ageListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.ageList.length);
            return this.ageList[i];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "genderListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.genderList.length);
            return this.genderList[i];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "legsCountListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.legsCountList.length);
            return this.legsCountList[i];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "tailLengthListItems", {
        get: function () {
            var i = Math.floor(Math.random() * this.tailLengthList.length);
            return this.tailLengthList[i];
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
