/* eslint no-use-before-define: 0 */ // --> OFF
/* eslint no-unused-vars: 0 */ // --> OFF
/* eslint max-len: 0 */ // --> OFF
/* eslint array-callback-return: 0 */ // --> OFF
/* eslint no-plusplus: 0 */ // --> OFF
/* eslint no-param-reassign: 0 */ // --> OFF
/* eslint no-continue: 0 */ // --> OFF
/* eslint no-mixed-operators: 0 */ // --> OFF
/* eslint for-direction: 0 */ // --> OFF

// eslint-disable-next-line max-classes-per-file
const randomize = (n: number): number => Math.floor(Math.random() * n);
const randomizeMinMax = function (min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
class Director {
    hiredCount: number;

    firedCount: number;

    projects: Project[];

    projectsCount: number;

    developersNeed: any[];

    developersNeedCount: number;

    projectsOnHold: Project[];

    departments: WebDepartment[];

    developers: Developer[];

    needDelopersForDep: boolean;

    day: Day;

    constructor(public name: string, departments: WebDepartment[], developers: Developer[], day: Day) {
      this.name = name;
      this.hiredCount = 0;
      this.firedCount = 0;
      this.projects = [];
      this.projectsOnHold = [];
      this.projectsCount = 0;
      this.developersNeed = [];
      this.departments = departments;
      this.developers = developers;
      this.needDelopersForDep = false;
      this.day = day;
    }

    takeProjects = () => {
      // console.log('THIS take project======================');
      const projectArr: Project[] = [];
      const devNeed: any[] = [];
      for (let i = 0; i < randomize(5); i += 1) {
        const newProject: Project = new Project();
        projectArr.push(newProject);
        this.developersNeedCount++;
        devNeed.push({ id: newProject.id, type: newProject.type });
      }
      this.projects = projectArr;
      this.projects.concat(projectArr);
      this.projectsCount = this.projects.length;
      // console.log(devNeed, 'THIS developers need!!!!!');
      // console.log(this.projectsCount, 'This projects count!!!!!');
      // console.log(this.projects, 'This Projects!!!!');
      this.countNeededDevelopersForProjects(devNeed);
    };

    countNeededDevelopersForProjects(dev: any[]):void {
      const neededDevelopers: any[] = [
        { type: 'web', count: 0 }, { type: 'mob', count: 0 },
      ];
      dev.forEach((p) => {
        neededDevelopers.forEach((el) => {
          if (p.type === el.type) {
            el.count++;
          }
        });
      });
      this.developersNeed = neededDevelopers;
      console.log(neededDevelopers, 'NEEDED DEVELOPERS ARRAY!!!!!');
    }

    hireDeveloper = ():void => {
      const webDevNumber: number = this.developersNeed[0].count;
      const mobileDevNumber: number = this.developersNeed[1].count;
      const specialization: string[] = ['web', 'mob'];
      if (webDevNumber > 0) {
        for (let i = 0; i < webDevNumber; i++) {
          this.developers.push(new Developer(specialization[0], this.day));
          this.hiredCount++;
        }
      }
      if (mobileDevNumber > 0) {
        for (let i = 0; i < mobileDevNumber; i++) {
          this.developers.push(new Developer(specialization[1], this.day));
          this.hiredCount++;
        }
      }
      this.sendDeveloper();
      // console.log(this.developers);
    };

    firedDeveloper = (firedId: number, department: Department) => {
      this.firedCount++;
      this.developers.filter((d) => d.id !== firedId);
    };

    startDay = () => {
      this.takeProjects();
      // if (this.projectsCount > 0) this.chooseDepartmentForProjects();
      this.hireDeveloper();
      this.chooseDepartmentForProjects();
      this.sendDevelopers();
      // console.log(this.developersNeed);
      // if (this.developersNeedCount > 0) this.hireDeveloper(this.developersNeedCount);
      // if (this.developers.length) this.sendDeveloper();
    };

    sendDeveloper = () => {
      // for (let i = 0; i < this.developers.length; i++) {
      //   for (let j = 0; j < this.departments.length; i++) {
      //     if (this.developers[i].specialization === this.departments[j].type) {
      //       this.departments[j].developers.push(this.developers[i]);
      //       this.departments[j].developersCount++;
      //     }
      //   }
      // }
    };

    sendDevelopers = () => {
      let needWebDev = this.developersNeed[0].count;
      let needMobileDev = this.developersNeed[1].count;
      console.log(needWebDev, 'NEED WEB DEVELOPERSSSSS');
      console.log(needMobileDev, 'NEED MOBILE DEVELOPERSSSSS');
      const projectTypes = ['web', 'mob'];
      const webDepartment = this.departments[0];
      const mobileDepartment = this.departments[1];
      if (this.developers.length) {
        // console.log(this.developers, 'THIS developeerssssssss');
        // console.log(this.developers);
        const mobileDevelopers = this.developers.filter((d) => d.specialization === 'mob');
        const webDevelopers = this.developers.filter((d) => d.specialization === 'web');
        if (needWebDev > 0) {
          console.log(needWebDev, 'neeed web DEV CIRCLE');
          for (let i = 0; i <= needWebDev; i++) {
            console.log(needWebDev, 'needWebDev!!!!!!', 'i = ', i);
            // console.log(needWebDev, 'needWebDev!!!!!!', 'i = ', webDevelopers[i]);
            // console.log(needWebDev, 'needWebDev!!!!!!', 'i = ', webDevelopers[i]);
            needWebDev--;
            webDepartment.developers.push(webDevelopers[i]);
            this.developers = this.developers.filter((dev) => dev.id !== webDevelopers[i].id);
          }
          needWebDev = 0;
        } if (needMobileDev > 0) {
          console.log(needMobileDev, 'neeed mob DEV CIRCLE');
          for (let i = 0; i < needMobileDev; i++) {
            console.log(needMobileDev, 'needMobileDev!!!!!!');
            mobileDepartment.developers.push(mobileDevelopers[i]);
            needMobileDev--;
            this.developers = this.developers.filter((dev) => dev.id !== mobileDevelopers[i].id);
          }
          needMobileDev = 0;
        }
      } else {
        console.log('NO DEVELOPERS!!!!');
      }
      console.log(mobileDepartment.developers, 'Mobile Departmens Pogrammers!!!!');
      console.log(webDepartment.developers, 'Web Departmens Pogrammers!!!!');
      console.log(this.developers, 'This Pogrammers!!!!');
    };

    chooseDepartmentForProjects = () => {
      const departmentTypes = ['web', 'mob'];
      let idlersInMobDep = false;
      let idlersInWebDep = false;
      if (this.departments[0].checkDepartmentForIdlers() > 0) idlersInWebDep = true;
      if (this.departments[1].checkDepartmentForIdlers() > 0) idlersInMobDep = true;

      console.log(idlersInMobDep, 'Idlers in mob department!!!==========');
      console.log(idlersInWebDep, 'Idlers in web department!!!==========');

      if (this.projects.length && (idlersInMobDep || idlersInWebDep)) {
        let specializedDepartment;
        departmentTypes.forEach((type, idx) => {
          if (this.departments[idx].checkDepartmentForIdlers()) return;
          let find = false;
          while (find === false) {
            for (let i = 0; i < this.projects.length; i++) {
              if (type === this.projects[i].type) {
                specializedDepartment = idx;
                this.sendProjects(idx, this.projects[i]);
                this.departments[idx].projectInWorkingCount++;
              }
            }
            find = true;
          }
        });
        console.log(this.departments[specializedDepartment], 'THIS DEPARTMENTS!!! TYPE==========');
        console.log(this.departments[specializedDepartment].checkDepartmentForIdlers(), 'THIS DEPARTMENTS idlers ==_-=-=-=-');
        console.log(this.departments[specializedDepartment].projectInWorking, 'project in working----1-1-1');
      }
    };

    sendProjects = (n: number, project: Project) => {
      console.log(n, 'this is send projects number');
      let { projectInWorking } = this.departments[n];
      projectInWorking = projectInWorking.concat(project);
      this.departments[n].projectInWorking = projectInWorking;
      this.departments[n].projectInWorkingCount = projectInWorking.length;
      // console.log(projectInWorking.length, 'project in working LENGTH!!!!');
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

    idlersDevelopersCount: number;

    day: Day;

    constructor(currentDay: Day) {
      this.id = randomize(1200);
      this.developers = [];
      this.developersCount = 0;
      this.day = currentDay;
      this.endedProjects = 0;
      this.projectInWorking = [];
      this.idlersDevelopersCount = 0;
      this.projectInWorkingCount = 0;
    }

    checkDepartmentForIdlers = () => this.idlersDevelopersCount;
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

    idleCount: 0;

    day: Day;

    constructor(specialization: string, day: Day) {
      this.id = randomize(1200);
      this.specialization = specialization;
      this.hired = false;
      this.fired = false;
      this.idleCount = 0;
      this.finishedProjects = 0;
      this.day = day;
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
const director = new Director('John', departments, developers, day);
countingDays(1);
// console.log(director);
// console.log(departments);
// console.log(developers);
// console.log(project);
