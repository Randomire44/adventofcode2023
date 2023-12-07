const fs = require('fs');

async function First() {
    function travel(holdingTime, maxTime) {
        const travelTime = maxTime - holdingTime;
        return holdingTime * travelTime;
    }
    const lines = fs.readFileSync('day6/input.txt', 'utf-8').split('\r\n');
    let total = 1;
    const times = lines[0].match(/\d+/g);
    const distances = lines[1].match(/\d+/g);
    const races = times.map((time, index) => [time, distances[index]]);

    for (let [time, distance] of races) {
        let winningTime = 0;
        for (let i = 0; i <= time; i++) {
            if (travel(i, time) > distance) {
                winningTime++;
            }
        }
        total *= winningTime;
    }
    console.log(total);
}

async function Second() {
    function travel(holdingTime, maxTime) {
        const travelTime = maxTime - holdingTime;
        return holdingTime * travelTime;
    }
    const lines = fs.readFileSync('day6/input.txt', 'utf-8').split('\r\n');
    let total = 1;
    const times = lines[0].replace(/\s+/g, '').match(/\d+/g);
    const distances = lines[1].replace(/\s+/g, '').match(/\d+/g);
    const races = times.map((time, index) => [time, distances[index]]);

    for (let [time, distance] of races) {
        let winningTime = 0;
        for (let i = 0; i <= time; i++) {
            if (travel(i, time) > distance) {
                winningTime++;
            }
        }
        total *= winningTime;
    }
    console.log(total);
}

// First();
Second();
