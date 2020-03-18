
const assert = require("chai").assert;
describe("Function", function() {
  describe("3 Task", function() {
    it("", function() {
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
      assert.isArray(catsGroupGenerate, 'catsGroupGenerate is an object array');
      assert.lengthOf(catsGroupGenerate, 5, "length of the new object array must be 5(n)");
    });
  });
  describe("4 Task", function() {
    const catsStatistics = new CatsStatistics.CatsStatistics(200);
    const returnFemaleCats = catsStatistics.returnFemaleCats();
    const filterCatsByAge = catsStatistics.filterCatsByAge();
    const filterCatsByGender = catsStatistics.filterCatsByGender();
    const filterOldestCats = catsStatistics.filterCatsByAge('older');
    const filterYoungestCats = catsStatistics.filterCatsByAge('younger');
    const returnNamesYongerCats = catsStatistics.returnNamesYoungerCats(5);

    it("Function returnFemaleCats must return string array", function() {
      assert.typeOf(returnFemaleCats, 'array', "returning type must be an array");
    });
    it("Function returnNames must return string array", function() {
      const returnNames = catsStatistics.returnNames();
      assert.typeOf(returnNames, 'array', "returning type must be an array");
    });
    it("Function filterCatsByAge must return catsArray", function() {
      assert.typeOf(filterCatsByAge, 'array', "returning type must be an array");
    });
    it("Function filterCatsByGender must return cats array ", function() {
      assert.typeOf(filterCatsByGender, 'array', "returning type must be an array");
    });
    it("Function returnOldestCats must return cats array ", function() {
      assert.typeOf(filterOldestCats, 'array', "returning type must be an array");
    });
    it("Function returnYoungestCats must return cats array ", function() {
      assert.typeOf(filterYoungestCats, 'array', "returning type must be an array");
    });
    it("Function returnNamesYoungerCats must return cats array", function() {
      assert.typeOf(returnNamesYongerCats, 'array', "returning type must be an array");
    });
  });
  describe("5 Task", function() {
    it("Function spreadingByTheName must return object", function() {
      const catsNameStats = new SpreadingByTheName.CatsNameStats(catsGroupGenerate);
      const calculateSpreading = catsNameStats.calculateSpreading();
      assert.isObject(calculateSpreading, "spreadingByTheName must be object");
    });
  });
  describe("6 Task", function() {
    it("CatFactoryDefault must return object", function() {
      const catFactoryDefault = CatFactoryDefault.catFactoryDefault();
      assert.isObject(catFactoryDefault, "catFactoryDefault must be object");
    });
    it("CatFactoryDefault must include predefined properties value", function() {
      const catFactoryDefaultWithParams = CatFactoryDefault.catFactoryDefault({name:'Alice', age:'24', gender:'Female',legsCount: '10', tailLength: '20'});
      assert.isObject(catFactoryDefaultWithParams, "spreadingByTheName must be object");
    });
  });
  describe("7 Task", function() {
    const catFactoryDefaultWithLoudness = CatFactoryDefaultWithLoudness.catFactoryDefault();
    it("CatFactoryDefault must return object", function() {
      assert.isObject(catFactoryDefaultWithLoudness, "catFactoryDefault must be object");
    });
    it("CatFactoryDefaultWithLoudness must contain loudness property", function() {
      assert.deepInclude(catFactoryDefaultWithLoudness, {loudness: true});
    });
  });
});
