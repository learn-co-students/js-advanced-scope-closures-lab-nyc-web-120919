function produceDrivingRange(range) {
    return function(startStreet, endStreet) {
        let start = parseInt(startStreet);
        let end = parseInt(endStreet);
        let distance = Math.abs( end - start );
        let difference = range - distance;

        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(tipPercent) {
    return function(fare) {
        return fare * tipPercent;
    }
}

function createDriver() {
    let ItemId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++ItemId;
        }
    }
}