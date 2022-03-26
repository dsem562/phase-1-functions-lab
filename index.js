// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street > 42) {
        street = street - 42;        
        return street;
    } else {
        street = 42 - street;             
        return street;
    }
}

function distanceFromHqInFeet(feet) {
    feet = distanceFromHqInBlocks(feet) * 264;
    return feet;
}

function distanceTravelledInFeet(start, end) {
    if(start < end) {
        let distance = (end - start) * 264;
        return distance;
    } else {
        let distance = (start - end) * 264;
        return distance;
    }
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end)
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        let fare = (distance - 400) * .02;
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        let fare = 25;
        return fare;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }

}