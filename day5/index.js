const fs = require('fs');

async function First() {
    const lines = fs.readFileSync('day5/input.txt', 'utf-8').split('\r\n');
    let seeds = lines[0].match(/\d+/g).map((x) => parseInt(x));
    let alreadyDone = [];

    for (let i = 1; i < lines.length; i++) {
        if (lines[i] === '') continue;
        if (lines[i].includes('map')) {
            alreadyDone = [];
            continue;
        }
        const [destinationRange, sourceRange, range] = lines[i]
            .split(' ')
            .map((x) => parseInt(x));
        seeds = seeds.map((value) => {
            if (alreadyDone.includes(value)) return value;
            if (value >= sourceRange && value <= sourceRange + range) {
                alreadyDone.push(value - sourceRange + destinationRange);
                return value - sourceRange + destinationRange;
            }
            return value;
        });
    }
    console.log(Math.min(...seeds));
}

async function Second() {
    const lines = fs.readFileSync('day5/input.txt', 'utf-8').split('\r\n');
    const mins = [];
    const seedsRange = lines[0].match(/\d+ \d+/g).map((x) => {
        const start = parseInt(x.split(' ')[0]);
        const end = parseInt(x.split(' ')[1]) + start - 1;
        return [start, end];
    });
    const steps = [];
    let step = [];

    for (let i = 3; i < lines.length; i++) {
        if (lines[i] === '') continue;
        if (lines[i].includes('map')) {
            steps.push(step);
            step = [];
            continue;
        }
        const [destinationRange, sourceRange, range] = lines[i]
            .split(' ')
            .map((x) => parseInt(x));
        const differenceToApply = destinationRange - sourceRange;

        step.push([[sourceRange, sourceRange + range - 1], differenceToApply]);
    }
    steps.push(step);
    seedsRange.forEach((seedRange) => {
        console.log('seedRange', seedRange);
        const [start, end] = seedRange;
        let min = null;
        for (let i = start; i <= end; i++) {
            if (i % 1000000 === 0) console.log(i);
            let current = i;
            for (let j = 0; j < steps.length; j++) {
                const step = steps[j];
                for (let k = 0; k < step.length; k++) {
                    const [[startRule, endRule], difference] = step[k];
                    if (current >= startRule && current <= endRule) {
                        current += difference;
                        break;
                    }
                }
            }
            min = min === null ? current : Math.min(min, current);
        }
        console.log('min', min);
        mins.push(min);
    });
    console.log(Math.min(...mins));
}

// First();
Second();
