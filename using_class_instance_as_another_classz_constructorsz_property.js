class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.mode = modes;
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;
        this.stationaryBikePos = new StationaryBike(stationaryBikePos, 8);
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs);           //
console.log(boxingGym.stationaryBikePos); //
console.log(boxingGym.treadmill);         //