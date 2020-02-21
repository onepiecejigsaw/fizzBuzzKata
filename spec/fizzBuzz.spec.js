const FizzBuzz = require("../src/FizzBuzz");
const fc = require("fast-check");

describe("FizzBuzz", () => {
  describe("#converting single integer", () => {
    it("returns 1 when converting the integer 1", () => {
      var integerToConvert = 1;
      const expectedResult = 1;

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns 2 when converting the integer 2", () => {
      var integerToConvert = 2;
      const expectedResult = 2;

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Fizz when converting the integer 3", () => {
      var integerToConvert = 3;
      const expectedResult = "Fizz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns 4 when converting the integer 4", () => {
      var integerToConvert = 4;
      const expectedResult = 4;

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Buzz when converting the integer 5", () => {
      var integerToConvert = 5;
      const expectedResult = "Buzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Fizz when converting the integer 6", () => {
      var integerToConvert = 6;
      const expectedResult = "Fizz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Buzz when converting the integer 10", () => {
      var integerToConvert = 10;
      const expectedResult = "Buzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Buzz when converting the integer 13", () => {
      var integerToConvert = 13;
      const expectedResult = "Fizz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns FizzBuzz when converting the integer 15", () => {
      var integerToConvert = 15;
      const expectedResult = "FizzBuzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Buzz when converting the integer 23", () => {
      var integerToConvert = 23;
      const expectedResult = "Fizz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns FizzBuzz when converting the integer 30", () => {
      var integerToConvert = 30;
      const expectedResult = "FizzBuzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns FizzBuzz when converting the integer 31", () => {
      var integerToConvert = 31;
      const expectedResult = "Fizz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns FizzBuzz when converting the integer 35", () => {
      var integerToConvert = 35;
      const expectedResult = "FizzBuzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns FizzBuzz when converting the integer 51", () => {
      var integerToConvert = 51;
      const expectedResult = "FizzBuzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });

    it("returns Buzz when converting the integer 52", () => {
      var integerToConvert = 52;
      const expectedResult = "Buzz";

      expect(FizzBuzz.convertSingleInteger(integerToConvert)).toEqual(
        expectedResult
      );
    });
  });

  describe("#converting a range of integers", () => {
    it("returns a string with Fizz in it if the input is a multiple of 3", () => {
      fc.assert(
        fc.property(fc.integer(0, 10000000000), n => {
          const result = FizzBuzz.convertSingleInteger(n);
          if (n % 3 === 0) expect(result.indexOf("Fizz")).toBeGreaterThan(-1);
        }), {numRuns: 100, verbose: true}
      );
    });
  });
});
