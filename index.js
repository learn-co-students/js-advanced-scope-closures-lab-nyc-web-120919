function produceDrivingRange(range){
    return function(holeOne, holeTwo){
        const holeDiff = -1 * (holeOne.slice(0,2) - holeTwo.slice(0,2));
        const rangeDiff = holeDiff - range
        if (rangeDiff > 0) {
            return `${rangeDiff} blocks out of range`;
        } else {
            return `within range by ${rangeDiff*-1}`
        }
    }
}

function produceTipCalculator(rate){
    return function(fare){
        return rate * fare;
    }
}

function createDriver(){
    let itemId = 0;
    return class{
        constructor(name){
            this.name = name;
            this.id = ++ itemId;
        }
    }
}
