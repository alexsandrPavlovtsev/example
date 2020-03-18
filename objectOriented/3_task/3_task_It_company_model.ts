/* eslint no-use-before-define: 0 */ // --> OFF
/* eslint no-unused-vars: 0 */ // --> OFF
/* eslint max-len: 0 */ // --> OFF
/* eslint array-callback-return: 0 */ // --> OFF
/* eslint no-plusplus: 0 */ // --> OFF

// eslint-disable-next-line max-classes-per-file
const randomize = (n: number): number => Math.floor(Math.random() * n);
class Director {
    hiredCount: number;

    firedCount: number;

    projects: Project[];

    projectsCount: number;

    developersNeed: {};

    developersNeedCount: 0;

    projectsOnHold: Project[];

    departments: WebDepartment[];

    developers: Developer[];

    constructor(public name: string, departments: WebDepartment[], developers: Developer[]) {
      this.name = name;
      this.hiredCount = 0;
      this.firedCount = 0;
      this.projects = [];
      this.projectsOnHold = [];
      this.projectsCount = 0;
      this.developersNeed = {};
      this.departments = departments;
      this.developers = developers;
    }

    takeProjects = () => {
      const projectArr: Project[] = [];
      for (let i = 0; i < randomize(5); i += 1) {
        projectArr.push(new Project());
      }
      this.projects = projectArr;
      this.projectsCount = this.projects.length;
    };

    startDay = () => {
      this.takeProjects();
      if (this.developersNeedCount > 0) this.hireDeveloper(this.developersNeedCount, 'mob');
      if (this.developers.length) this.sendDeveloper();
      if (this.projectsCount > 0) this.chooseDepartmentForProjects();
    };

    hireDeveloper = (n: number = randomize(6), specialization: string):void => {
      for (let i = 0; i < n; i += 1) {
        this.developers.push(new Developer(specialization));
        this.hiredCount++;
      }
    };

    firedDeveloper = (firedId: number) => {
      this.firedCount++;
      this.developers.filter((d) => d.id !== firedId);
    };

    sendDeveloper = () => {
      for (let i = 0; i < this.developers.length; i++) {
        for (let j = 0; j < this.departments.length; i++) {
          if (this.developers[i].specialization === this.departments[j].type) {
            this.departments[j].developers.push(this.developers[i]);
            this.departments[j].developersCount++;
          }
        }
      }
    };

    chooseDepartmentForProjects = () => {
      if (this.projects.length) {
        let specializedDepartment;
        this.departments.map((el, idx) => {
          for (let i = 0; i < this.projects.length; i += 1) {
            if (el.type === this.projects[i].type) {
              specializedDepartment = idx;
            }
          }
          this.sendProjects(specializedDepartment);
        });
      }
    };

    sendProjects = (n: number) => {
      let { projectInWorking } = this.departments[n];
      projectInWorking = projectInWorking.concat(this.projects);

      console.log(projectInWorking, 'projects in working!!!!');
      console.log(this.departments[n].projectInWorking, 'projects in working departments!!!!');

      const { developersCount } = this.departments[n];
      const developersCanBeUsed = developersCount - projectInWorking.length;

      console.log(developersCanBeUsed, 'DEVELOPERS CAN BE USED!!!!!');
      console.log(this.projects, 'THIS projects!!!!!!!!');

      if (developersCanBeUsed > 0) {
        this.departments[n].projectInWorking = projectInWorking;
        this.departments[n].projectInWorkingCount = projectInWorking.length;

        console.log(projectInWorking.length, 'project in working LENGTH!!!!');

        this.projects = projectInWorking;

        console.log(projectInWorking);

        this.developersNeed = 0;
        return projectInWorking;
      }

      this.developersNeed = developersCanBeUsed;
      projectInWorking.splice(-1, Math.abs(developersCanBeUsed));

      console.log(projectInWorking);

      this.departments[n].projectInWorking = projectInWorking;
      return projectInWorking;
    }
}
class Department {
    id: number;

    developers: Developer[];

    endedProjects: number;

    projectInWorkingCount: number;

    projectInWorking: Project[];

    developersCount: number;

    public currentDay: Day;

    constructor(currentDay: Day) {
      this.id = randomize(1200);
      this.developers = [];
      this.developersCount = 0;
      this.currentDay = currentDay;
      this.endedProjects = 0;
      this.projectInWorking = [];
      this.projectInWorkingCount = 0;
    }
}
class WebDepartment extends Department {
  type: string;

  constructor(currentDay: Day) {
    super(currentDay);
    this.type = 'web';
  }
}
class MobileDepartment extends Department {
  type: string;

  constructor(currentDay: Day) {
    super(currentDay);
    this.type = 'mob';
  }
}
class QaDepartment extends Department {
  type: string;

  constructor(currentDay: Day) {
    super(currentDay);
    this.type = 'qa';
  }
  // startTesting():void {
  //   const startDay = this.currentDay.number;
  //   const endTestingDay = this.currentDay.number + 1;
  //
  // }
}
class Day {
  number: number;

  constructor() {
    this.number = 0;
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
      this.type = types[randomize(2)];
      this.tested = false;
      this.done = false;
    }
}
class Developer {
    fired: boolean;

    hired: boolean;

    id: number;

    specialization: string;

    finishedProjects: number;

    constructor(specialization: string) {
      this.id = randomize(1200);
      this.specialization = specialization;
      this.hired = false;
      this.fired = false;
      this.finishedProjects = 0;
    }
}
const countingDays = (n: number) => {
  for (let i = 0; i < n; i += 1) {
    director.startDay();
    day.number++;
  }
};
const day = new Day();
const departments = [new WebDepartment(day), new MobileDepartment(day), new QaDepartment(day)];
const developers = [];
const director = new Director('John', departments, developers);
countingDays(1);
// console.log(director);
// console.log(departments);
// console.log(developers);
// console.log(project);
