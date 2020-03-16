import { type } from "os";

class Director {
    constructor(public name: string) {
        this.name = name
    }
}
class Department {
    constructor(public id: number, public name: string, public type: string) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
class Project {
    done: boolean;
    tested: boolean;
    constructor(public id: number,public difficulty: number, public type: string) {
        this.id = id;
        this.difficulty = difficulty;
        this.type = type;
        this.tested = false;
        this.done = false;
    }
}
class Worker {
    fired: boolean;
    hired: boolean;
    constructor(public id: number,public specialization: string, public name: string) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.hired = false;
        this.fired = false;
    }
}
