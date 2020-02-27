const FizzBuzz = require("../src/FizzBuzz");
const fc = require("fast-check");

describe("FizzBuzz", () => {

  const runTenThousandTests = predicate => {
    fc.assert(
        fc.property(fc.integer(0, 1000000000), predicate)
        , {numRuns: 10000, verbose: true}
    )
  };

  describe("#converting a range of integers", () => {
        it("returns a string with Fizz in it if the input is a multiple of 3", () => {
            runTenThousandTests(
                n => {
                    const result = FizzBuzz.convertSingleInteger(n);
                    if (n % 3 === 0) expect(result.indexOf("Fizz")).toBeGreaterThan(-1);
                }
            );
        });

        it("returns a string with Fizz in it if the input contains a 3", () => {
            runTenThousandTests(n => {
                    const result = FizzBuzz.convertSingleInteger(n);
                    if (n.toString().indexOf("3") > -1)
                        expect(result.indexOf("Fizz")).toBeGreaterThan(-1);
                }
            );
        });

        it("returns a string with Buzz in it if the input is a multiple of 5", () => {
            runTenThousandTests(n => {
                    const result = FizzBuzz.convertSingleInteger(n);
                    if (n % 5 === 0) expect(result.indexOf("Buzz")).toBeGreaterThan(-1);
                }
            );
        });

        it("returns a string with Buzz in it if the input contains a 5", () => {
            runTenThousandTests(n => {
                    const result = FizzBuzz.convertSingleInteger(n);
                    if (n.toString().indexOf("5") > -1)
                        expect(result.indexOf("Buzz")).toBeGreaterThan(-1);
                }
            );
        });

        it("returns the input if the input is not a multiple of 3 or 5, and does not contain a 3 or 5", () => {
            runTenThousandTests(n => {
                    const result = FizzBuzz.convertSingleInteger(n);
                    if (
                        n % 3 !== 0 &&
                        n % 5 !== 0 &&
                        n.toString().indexOf("3") === -1 &&
                        n.toString().indexOf("5") === -1
                    )
                        expect(result).toBe(n);
                }
            );
        });
    });
});
