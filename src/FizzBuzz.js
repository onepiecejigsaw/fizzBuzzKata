var FizzBuzz = {
    convertSingleInteger: function (integerToConvert) {
        let result = "";
        if (integerToConvert % 3 === 0 || integerToConvert.toString().indexOf("3") > -1) result += "Fizz";
        if (integerToConvert % 5 === 0 || integerToConvert.toString().indexOf("5") > -1) result += "Buzz";
        return result.length === 0 ? integerToConvert : result;
    },

    convertRangeOfIntegers: function (upperLimit) {
        for (var i = 1; i <= upperLimit; i++) {
            console.log(this.convertSingleInteger(i));
        }
    }
};


module.exports = FizzBuzz;

//FizzBuzz.convertRangeOfIntegers(100);
