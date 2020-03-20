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
type DepartmentsArray = (WebDepartment | QaDepartment | MobileDepartment)[]
class Director {
    hiredCount: number;

    firedCount: number;

    projects: Project[];

    projectsCount: number;

    developersNeed: any[];

    developersNeedCount: number;

    projectsOnHold: Project[];

    departments: DepartmentsArray;

    developers: Developer[];

    needDelopersForDep: boolean;

    day: Day;

    constructor(public name: string, departments: DepartmentsArray, developers: Developer[], day: Day) {
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
        { type: 'web', count: 0 }, { type: 'mob', count: 0 }, { type: 'qa', count: 0 },
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
      const specialization: string[] = ['web', 'mob', 'qa'];
      this.developersNeed.forEach((dN, idx) => {
        if (dN.count > 0) {
          for (let i = 0; i < dN.count; i++) {
            this.developers.push(new Developer(specialization[idx], this.day));
            this.hiredCount++;
          }
        }
      });
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
      // let needWebDev = this.developersNeed[0].count;
      // let needMobileDev = this.developersNeed[1].count;
      // console.log(needWebDev, 'NEED WEB DEVELOPERSSSSS');
      // console.log(needMobileDev, 'NEED MOBILE DEVELOPERSSSSS');
      const projectTypes = ['web', 'mob', 'qa'];
      // const webDepartment = this.departments[0];
      // const mobileDepartment = this.departments[1];
      if (this.developers.length) {
        // console.log(this.developers, 'THIS developeerssssssss');
        // console.log(this.developers);
        // const mobileDevelopers = this.developers.filter((d) => d.specialization === 'mob');
        // const webDevelopers = this.developers.filter((d) => d.specialization === 'web');
        this.developersNeed.forEach((nD, idx) => {
          if (nD.count > 0) {
            for (let i = 0; i <= nD.count; i++) {
              console.dir(nD.count, 'needDev!!!!!!', 'i = ', i);
              const specDevelopers = this.developers.filter((d) => d.specialization === projectTypes[idx]);
              nD.count--;
              if (specDevelopers.length) {
                const specDevOutgoing = specDevelopers[randomizeMinMax(0, specDevelopers.length - 1)];
                console.dir(specDevOutgoing, 'Spec dev outgoing!-------');
                this.departments[idx].developers.push(specDevOutgoing);
                this.developers = this.developers.filter((dev) => dev.id !== specDevOutgoing.id);
              }
              console.dir(this.departments[idx].type, 'Type of departments!!!');
              console.dir(this.departments[idx].developers, 'This departments developers!!!');
              console.dir(this.developers, 'This developers!!!');
            }
          }
        });
      } else {
        console.log('NO DEVELOPERS!!!!');
      }
      // console.log(mobileDepartment.developers, 'Mobile Departmens Pogrammers!!!!');
      // console.log(webDepartment.developers, 'Web Departmens Pogrammers!!!!');
      // console.log(this.developers, 'This Pogrammers!!!!');
    };

    chooseDepartmentForProjects = () => {
      const departmentTypes = ['web', 'mob'];
      const idlersInMobDep = this.departments[0].checkDepartmentForIdlers() > 0;
      const idlersInWebDep = this.departments[1].checkDepartmentForIdlers() > 0;
      // if (this.departments[0].checkDepartmentForIdlers() > 0) idlersInWebDep = true;
      // if (this.departments[1].checkDepartmentForIdlers() > 0) idlersInMobDep = true;

      console.log(idlersInMobDep, 'Idlers in mob department!!!==========');
      console.log(idlersInWebDep, 'Idlers in web department!!!==========');

      if (this.projects.length && (idlersInMobDep || idlersInWebDep)) {
        let specializedDepartment;
        departmentTypes.forEach((type, idx) => {
          // if (this.departments[idx].checkDepartmentForIdlers()) return;
          for (let i = 0; i < this.projects.length; i++) {
            if (type === this.projects[i].type) {
              specializedDepartment = idx;
              this.sendProjects(idx, this.projects[i]);
              this.departments[idx].projectsInWorkingCount++;
            }
          }
        });
        console.log(this.departments[specializedDepartment], 'THIS DEPARTMENTS!!! TYPE==========');
        console.log(this.departments[specializedDepartment].checkDepartmentForIdlers(), 'THIS DEPARTMENTS idlers ==_-=-=-=-');
        console.log(this.departments[specializedDepartment].projectsInWorking, 'project in working----1-1-1');
      }
    };

    sendProjects = (n: number, project: Project) => {
      console.log(n, 'this is send projects number');
      let { projectsInWorking } = this.departments[n];
      const sendedProject = project;
      sendedProject.dayWhenProjectBeenSendToDep = this.day.number;
      projectsInWorking = projectsInWorking.concat(sendedProject);
      this.departments[n].projectsInWorking = projectsInWorking;
      this.departments[n].projectsInWorkingCount = projectsInWorking.length;
      console.log(this.departments[n].projectsInWorking);
      // console.log(projectsInWorking.length, 'project in working LENGTH!!!!');
      return projectsInWorking;
    }
}
class Department {
    id: number;

    developers: Developer[];

    endedProjects: number;

    projectsInWorkingCount: number;

    projectsInWorking: Project[];

    idlersDevelopersCount: number;

    day: Day;

    constructor(currentDay: Day) {
      this.id = randomize(1200);
      this.developers = [];
      this.day = currentDay;
      this.endedProjects = 0;
      this.projectsInWorking = [];
      this.idlersDevelopersCount = 0;
      this.projectsInWorkingCount = 0;
    }

    returnDevelopersCount = () => this.developers.length;

    checkDepartmentForIdlers = () => this.idlersDevelopersCount;
}
class WebDepartment extends Department {
  type: string;

  constructor(currentDay: Day) {
    super(currentDay);
    this.type = 'web';
  }

  checkProjectForGoingOnTesting = () => {
    if (this.projectsInWorking) {
      this.projectsInWorking.forEach((p) => {
        const projectInDevelopment = this.day.number - p.dayWhenProjectBeenSendToDep;
        if (projectInDevelopment === 1) {
          p.dayWhenProjectBeenSendToDep = this.day.number;
        }
      });
    }
  };

  sendProjectOnTesting = (department: QaDepartment) => {
    if (this.projectsInWorking) {
      this.projectsInWorking.forEach((p) => {
        const projectId = p.id;
        if (p.dayWhenGoOnTesting > 0) {
          department.projectsInWorking.push(p);
          this.projectsInWorking.filter((proj) => proj.id !== projectId);
        }
      });
    }
  }
}

class MobileDepartment extends Department {
  type: string;

  constructor(currentDay: Day) {
    super(currentDay);
    this.type = 'mob';
  }

  startDay = (qaDepartment: QaDepartment) => {
    this.checkProjectForGoingOnTesting();
    this.sendProjectOnTesting(qaDepartment);
  };

  checkProjectForGoingOnTesting = () => {
    console.log(this.projectsInWorking.length, 'this projects in working length-=!-=-!=-=!-=-!')
    if (this.projectsInWorking.length) {
      this.projectsInWorking.forEach((p) => {
        console.log(p, 'Project that go on testing=-=-=-=======');
        const projectInDevelopment = this.day.number - p.dayWhenProjectBeenSendToDep;
        const { difficulty } = p;
        const isEqual = projectInDevelopment === difficulty;
        if (isEqual) {
          p.dayWhenGoTesting = this.day.number;
        }
      });
    }
  };

  sendProjectOnTesting = (qaDepartment: QaDepartment) => {
    if (this.projectsInWorking.length) {
      this.projectsInWorking.forEach((p) => {
        const projectId = p.id;
        if (p.dayWhenGoTesting > 0) {
          qaDepartment.projectsInWorking.push(p);
          this.projectsInWorking.filter((proj) => proj.id !== projectId);
          this.endedProjects++;
        }
      });
    }
    console.log(qaDepartment.projectsInWorking, 'Qa department projects in working=-=-=-=---==--=-=-');
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

    dayWhenProjectBeenSendToDep: number;

    dayWhenGoOnTesting: number;

    constructor() {
      this.id = randomize(1200);
      this.difficulty = randomize(4);
      const types = ['web', 'mob'];
      this.type = types[randomize(2)];
      this.tested = false;
      this.done = false;
      this.dayWhenProjectBeenSendToDep = 0;
      this.dayWhenGoOnTesting = 0;
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

const day = new Day();
const departments: DepartmentsArray = [new WebDepartment(day), new MobileDepartment(day), new QaDepartment(day)];
const developers = [];
const director = new Director('John', departments, developers, day);
const countingDays = (n: number) => {
  for (let i = 0; i < n; i += 1) {
    director.startDay();
    const mobDev = departments[1];
    if (mobDev instanceof MobileDepartment) {
      mobDev.startDay(departments[2]);
    }
    day.number++;
  }
};
countingDays(3);
// console.log(director);
// console.log(departments);
// console.log(developers);
// console.log(project);
