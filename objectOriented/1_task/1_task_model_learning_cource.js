"use strict";
exports.__esModule = true;
var Cource = /** @class */ (function () {
    function Cource(name) {
        this.name = name;
        this.themes = [new Theme('Mathematicks'), new Theme('Programming'), new Theme('Astrology')];
    }
    return Cource;
}());
exports.Cource = Cource;
var Theme = /** @class */ (function () {
    function Theme(name) {
        this.name = name;
        this.questions = [new Question('1 + 1'), new Question('How inheritance work in javascript ?'), new Question('How long does it take to go to the moon and back?')];
    }
    return Theme;
}());
exports.Theme = Theme;
var Question = /** @class */ (function () {
    function Question(name) {
        this.name = name;
        this.answers = [new Answers('Answers № 1'), new Answers('Answers № 2'), new Answers('Answers № 3')];
    }
    return Question;
}());
exports.Question = Question;
var Answers = /** @class */ (function () {
    function Answers(name) {
        this.name = name;
        this.rightAnswers = [new RightAnswer('2'), new RightAnswer('It work throught prototype'), new RightAnswer('It took about 1 sun year')];
        this.wrongAnswers = [new WrongAnswer('4'), new WrongAnswer('It is not working at all'), new WrongAnswer('It took 1000 millions sun years')];
    }
    return Answers;
}());
exports.Answers = Answers;
var RightAnswer = /** @class */ (function () {
    function RightAnswer(name) {
        this.name = name;
    }
    return RightAnswer;
}());
exports.RightAnswer = RightAnswer;
var WrongAnswer = /** @class */ (function () {
    function WrongAnswer(name) {
        this.name = name;
    }
    return WrongAnswer;
}());
exports.WrongAnswer = WrongAnswer;
var cource = new Cource('1 Cource');
