class FizzBuzz {
    static convertSingleInteger(integerToConvert) {
        if(this.shouldBeConvertedToFizz(integerToConvert) && this.shouldBeConvertedToBuzz(integerToConvert))
            return "FizzBuzz";
        if(this.shouldBeConvertedToFizz(integerToConvert))
            return "Fizz";
        if(this.shouldBeConvertedToBuzz(integerToConvert))
            return "Buzz";
        return integerToConvert;
    }

    static shouldBeConvertedToFizz(integerToConvert) {
        return (integerToConvert%3 === 0 || integerToConvert.toString().indexOf("3") > -1);
    }

    static shouldBeConvertedToBuzz(integerToConvert) {
        return (integerToConvert%5 === 0 || integerToConvert.toString().indexOf("5") > -1);
    }


    static convertRangeOfIntegers(upperLimit) {
        for(var i = 1; i <= upperLimit; i++) {
            console.log(this.convertSingleInteger(i));
        }
    }
}


module.exports = FizzBuzz;

FizzBuzz.convertRangeOfIntegers(100);