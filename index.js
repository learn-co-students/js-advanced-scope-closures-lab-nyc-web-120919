
produceDrivingRange = (blockRange) => {
    return (startingBlock, endingBlock) => {

        let start = parseInt(startingBlock);
        let end = parseInt(endingBlock);
        let distanceToTravel = Math.abs(end - start);
        let difference = blockRange - distanceToTravel;

        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

produceTipCalculator = (percentage) => {
    return (rideFare) => {
        return rideFare * percentage;
    }
}

createDriver = () => {
    let driverId = 0
    return class {
        constructor(name) {
            this.id = ++driverId
            this.name = name
        }
    }
}