const produceDrivingRange = function (range) {
    return function (start, end) {
        let beginning = parseInt(start, 10);
        let final = parseInt(end, 10);
        let distance = Math.abs(final - beginning);
        let result = range - distance;

        if (result > 0) {
            return `within range by ${result}`
        } else {
            return `${Math.abs(result)} blocks out of range`
        }
    }
}

const produceTipCalculator = function (tipPercentage) {
    return function (fare) {
        return fare * tipPercentage
    }
}

const createDriver = function () {
    let id = 0
    return class Driver {
        constructor(name) {
            this.name = name;
            this.id = id;
            ++id
        }
    }
}