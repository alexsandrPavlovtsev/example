
const randomize = (n: number) => {
    return Math.floor(Math.random() * n)
}
class Director {
    hiredCount: number;
    firedCount: number;
    projects: Project[];
    projectsCount: number;
    developersNeed: number;
    projectsOnHold: Project[];
    constructor(public name: string) {
        this.name = name;
        this.hiredCount = 0;
        this.firedCount = 0;
        this.projects = [];
        this.projectsOnHold = [];
        this.projectsCount = 0;
        this.developersNeed = 0;
    }
    takeProjects = () => {
        const projectArr: Project[] = [];
        for(let i = 0; i < randomize(5); i++) {
            projectArr.push(new Project());
        }
        this.projects = projectArr;
        this.projectsCount = this.projects.length;
    }
    startDay = () => {
        if(this.developersNeed > 0) {
            this.hireDeveloper(this.developersNeed);
        }
        else {
            this.hireDeveloper();
        }
        this.takeProjects();
        this.sendDeveloper(randomize(5), randomize(3));
        this.chooseDepartmentForProjects();
    }
    hireDeveloper = (n: number = randomize(6)):void => {
        for(let i =0; i< n; i++) {
            developers.push(new Developer());
            this.hiredCount++;
        }
    }
    firedDeveloper = (firedId: number)=> {
        this.firedCount++;
        developers.filter((id) => id !== firedId);
    }
    sendDeveloper = (n: number, depId: number) => {
        for(let i=0; i < n; i++) {
            departments[depId].developers.push(new Developer());
        }
    }
    chooseDepartmentForProjects = () => {
        if(this.projects.length) {
            let specializedDepartment = randomize(3);
            departments.map((el, idx) => {
                for(let i = 0; i< this.projects.length; i++) {
                    if(el.type === this.projects[i].type) {
                        specializedDepartment = idx;
                    }
                }
            });
            console.log(specializedDepartment, 'SPECIALIZED department')
            this.sendProjects(specializedDepartment);
        }
        else {
            this.takeProjects();
        }
    }
    sendProjects = (n: number) => {
        console.log(departments[n].projectInWorking);
        let projectInWorking: Project[] = departments[n].projectInWorking;
        projectInWorking = projectInWorking.concat(this.projects);
        console.log(projectInWorking, 'projects in working!!!!');
        const developersCount = departments[n].developersCount;
        const developersCanBeUsed = developersCount - projectInWorking.length;
        if(departments[n].projectInWorkingCount < departments[n].developersCount) {
            departments[n].projectInWorkingCount = projectInWorking.length;
            this.projects = projectInWorking;
            console.log(projectInWorking);
            this.developersNeed = 0;
            return projectInWorking;
        }
        else {
            this.developersNeed = developersCanBeUsed;
            projectInWorking.splice(-1, developersCanBeUsed);
            console.log(projectInWorking);
            return projectInWorking;
        }
    }
}
class Department {
    id: number;
    developers: Developer[];
    endedProjects: number;
    projectInWorkingCount: number;
    projectInWorking: Project[];
    type: string;
    developersCount: number;
    constructor(type: string) {
        this.id = randomize(1200);
        this.developers = [];
        this.developersCount = 0;
        this.endedProjects = 0;
        this.projectInWorking = [];
        this.type = type;
        this.projectInWorkingCount = 0;
    }
}
class Project {
    done: boolean;
    tested: boolean;
    id: number;
    difficulty: number;
    type: string;
    constructor() {
        this.id = randomize(1200);
        this.difficulty = randomize(4);        
        const types = ['web', 'mob'];
        this.type = types[randomize(3)];
        this.tested = false;
        this.done = false;
    }
}
class Developer {
    fired: boolean;
    hired: boolean;
    id: number;
    specialization: string;
    constructor() {
        this.id = randomize(1200);
        const specialization: string[] = ['web', 'mobile', 'qa'];
        this.specialization = specialization[randomize(3)];
        this.hired = false;
        this.fired = false;
    }
}
const director = new Director('John');
const departments = [new Department('web'), new Department('mobile'), new Department('qa')];
const developers = [];
const project = []
director.startDay();
console.log(director);
console.log(departments);
console.log(developers);
console.log(project);