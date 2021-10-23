// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    if (block < 42) {
        return 42 - block;
    } else {
        return block - 42;
    }
}

function distanceFromHqInFeet(blocknum) {
    return distanceFromHqInBlocks(blocknum) * 264;
}

function distanceTravelledInFeet(start, ending) {
    if (start <= ending) {
        return (ending - start) * 264; 
    } else {
        return (start - ending) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let destinationInFeet = distanceTravelledInFeet(start, destination);
    if (destinationInFeet <= 400) {
        return 0;
    } if (destinationInFeet > 400 && destinationInFeet <= 2000) {
        return (destinationInFeet - 400) * 0.02;
    } if (destinationInFeet > 2000 && destinationInFeet <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}