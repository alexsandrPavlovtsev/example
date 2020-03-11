const TaskList = require("../js/1_task/1_task_list_function.js");
const CatFactory = require("../js/2_task/2_task_catFactory.js");
const CatsGroupGenerate = require('../js/3_task/3_task_catsGroupGenerate.js')
const assert = require("chai").assert;
describe("Function", function() {
  describe("1 Task", function() {
    it("Function must return object and this object must be instance of List class", function() {
      const taskListFunction = new TaskList.List(
        ['Hello', 'Alex', 'Unnamed'],
        [1, 322, 456, 3221, 4],
        [10, 10, 2, 3, 1, 2],
        [20, 1, 34, 2, 1, 3, 4],
        [10, 3, 24, 4, 4, 2, 2, 1]
      );
      assert.isObject(taskListFunction, 'taskListFunction is an object');
      assert.instanceOf(taskListFunction,TaskList.List, 'taskListFunction is instance of List class')

    });
    it("List function must return object with the same value as in argument list", function() {
        const taskListFunction = new TaskList.List(
          ['Hello', 'Alex', 'Unnamed'],
          [1, 322, 456, 3221, 4],
          [10, 10, 2, 3, 1, 2],
          [20, 1, 34, 2, 1, 3, 4],
          [10, 3, 24, 4, 4, 2, 2, 1]
        );
        // Check if the new object equal argument list
        assert.deepInclude(taskListFunction, {
            namesList: ['Hello', 'Alex', 'Unnamed' ],
            ageList: [1, 322, 456, 3221, 4],
            genderList: [10, 10, 2, 3, 1, 2],
            legsCountList: [20, 1, 34, 2, 1, 3, 4],
            tailLengthList: [10, 3, 24, 4, 4, 2, 2, 1]
        })
      });
  });
  describe("2 Task", function() {
    it("Function must return object", function() {
      const catFactory = CatFactory.catFactory();
      assert.isObject(catFactory, 'taskListFunction is an object');
    });
    it("Returning object must have some defined properties", function() {
      const catFactory = CatFactory.catFactory();
        // Check if the new object have some predefined properties
        assert.property(catFactory,
            'name',
            'age',
            'gender',
            'legsCount',
            'tailLength'
        )
      });
  });
  describe("3 Task", function() {
    it("Function must return object array with n length", function() {
      const catsGroupGenerate = CatsGroupGenerate.catsGroupGenerate(5);
      assert.isArray(catsGroupGenerate, 'catsGroupGenerate is an object array');
      assert.lengthOf(catsGroupGenerate, 5, "length of the new object array must be 5(n)");
    });
  });
});
