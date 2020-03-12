
export class Cource {
    name: string;
    themes: object[];
    constructor(name: string) {
        this.name = name;
        this.themes = [new Theme('Mathematicks'), new Theme('Programming'), new Theme('Astrology')]
    }
}
export class Theme {
    name: string;
    questions: Question[];
    constructor(name: string) {
        this.name = name;
        this.questions = [new Question('1 + 1'), new Question('How inheritance work in javascript ?'), new Question('How long does it take to go to the moon and back?') ];
    }
}
export class Question {
    name: string;
    answers: Answers[];
    constructor(name: string) {
        this.name = name;
        this.answers = [new Answers('Answers № 1'), new Answers('Answers № 2'),new Answers('Answers № 3') ];
    }
}
export class Answers {
    name: string;
    rightAnswers: RightAnswer[];
    wrongAnswers: WrongAnswer[];
    constructor(name: string) {
        this.name = name;
        this.rightAnswers = [new RightAnswer('2'), new RightAnswer('It work throught prototype'), new RightAnswer('It took about 1 sun year')];
        this.wrongAnswers = [new WrongAnswer('4'), new WrongAnswer('It is not working at all'), new WrongAnswer('It took 1000 millions sun years')];
    }
}
export class RightAnswer {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}
export class WrongAnswer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const cource = new Cource('1 Cource');