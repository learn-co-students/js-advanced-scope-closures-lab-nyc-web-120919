function produceDrivingRange(blockRange) {
    return function(block1, block2) {
        let block1Num = streetToNumber(block1);
        let block2Num = streetToNumber(block2);

        let givenRange = block1Num - block2Num;
        if (givenRange < 0) {
            givenRange *= -1;
        }

        let rangeDiff = blockRange - givenRange;

        if (rangeDiff >= 0) {
            return `within range by ${givenRange}`;
        } 
        else {
            return `${rangeDiff * -1} blocks out of range`;
        }
    }
}

function streetToNumber(street) {
    return Number.parseInt(street.split('th'));
}

function produceTipCalculator(percent) {
    return function(amount) {
        return amount * percent;
    }
}

function createDriver() {
    let driverId = 0;
    return class Driver {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}