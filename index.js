function produceDrivingRange(blockRange) {
    return function(startingBlock, endingBlock) {
        let start = parseInt(startingBlock.split("th"))
        let end = parseInt(endingBlock.split("th"))
        let distance = (end - start)
        let difference = blockRange - distance
        
        if (difference >+ 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(fare) {
    return function(percent) {
        return fare * percent
    }
}

function createDriver() {
    let driverId = 0 
    return class {
        constructor(name) {
            this.id = ++driverId
            this.name = name
        }
    }
}