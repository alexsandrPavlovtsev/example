const TaskList = require("../js/1_task/1_task_list_function.js");
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
      console.log(taskListFunction);
      console.log(Object.keys(taskListFunction));
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
});
