const Cource = require('../1_task/1_task_model_learning_cource.js');
const assert = require("chai").assert;
describe("Cource class", function() {
    describe("Check classes", function() {
        const cource = new Cource.Cource('Cource 1');
        const themesProp = cource.themes;
        console.log(themesProp)
        describe("Cource class", function() {
            it("Object cource must be instance of Cource class", function() {
                assert.instanceOf(cource, Cource.Cource, "cource must be instance of Cource class");
            })
            it("Object cource must contain themes array property", function() {
                assert.property(cource, 'themes', "cource must contain themes property");
            })
            it("Theme property must have type of === array", function() {
                assert.isArray(themesProp, "theme prop must be an array");
            })
        })
        describe("Theme class", function() {
            const theme = new Cource.Theme('Math');
            const questionsProps = theme.questions;
            it("Object theme must be instance of Theme class", function() {
                assert.instanceOf(theme, Cource.Theme, "theme must be instance of Theme class");
            })
            it("Object theme must contain questions array property", function() {
                assert.property(theme, 'questions', "theme must contain questions property");
            })
            it("Questions property must have type of === array", function() {
                assert.isArray(questionsProps, "questions prop must be an array");
            })
        })
        describe("Question class", function() {
            const question = new Cource.Question('Qestions #1');
            const answersProps = question.answers;
            it("Object question must be instance of Question class", function() {
                assert.instanceOf(question, Cource.Question, "question must be instance of Question class");
            })
            it("Object question must contain answers array property", function() {
                assert.property(question, 'answers', "question must contain answers property");
            })
            it("Answers property must have type of === array", function() {
                assert.isArray(answersProps, "questions prop must be an array");
            })
        })
        describe("Answer class", function() {
            const answers = new Cource.Answers('Answers #1');
            const rightAnswersProps = answers.rightAnswers;
            const wrongAnswersProps = answers.wrongAnswers;
            it("Object answers must be instance of Answers class", function() {
                assert.instanceOf(answers, Cource.Answers, "answers must be instance of Answers class");
            })
            it("Object answers must contain rightAnswers array property", function() {
                assert.property(answers, 'rightAnswers', "answers must contain rightAnswers property");
            })
            it("RightAnswers property must have type of === array", function() {
                assert.isArray(rightAnswersProps, "questions prop must be an array");
            })
            it("Object answers must contain wrongAnswers array property", function() {
                assert.property(answers, 'wrongAnswers', "question must contain wrongAnswers property");
            })
            it("WrongAnswers property must have type of === array", function() {
                assert.isArray(wrongAnswersProps, "questions prop must be an array");
            })
        })
        describe("Right answer class", function() {
            const rightAnswer = new Cource.RightAnswer('4');
            it("Object rightAnswer must be instance of RightAnswer class", function() {
                assert.instanceOf(rightAnswer, Cource.RightAnswer, "rightAnswer must be instance of RightAnswer class");
            })
        })
        describe("Wrong answer class", function() {
            const wrongAnswer = new Cource.WrongAnswer('1010');
            it("Object wrongAnswer must be instance of WrongAnswer class", function() {
                assert.instanceOf(wrongAnswer, Cource.WrongAnswer, "wrongAnswer must be instance of WrongAnswer class");
            })
        })
})
});