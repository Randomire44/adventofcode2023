const fs = require('fs');
const readline = require('readline');

async function First() {
    const fileStream = fs.createReadStream('day2/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
    });

    let count = 0;
    for await (const line of rl) {
        const game = line.match(/Game \d?\d?\d/)[0].split(' ')[1];

        if (
            line
                .match(/\d?\d blue/g)
                ?.some((blue) => parseInt(blue.split(' ')[0]) > 14)
        ) {
            continue;
        }

        if (
            line
                .match(/\d?\d red/g)
                ?.some((red) => parseInt(red.split(' ')[0]) > 12)
        ) {
            continue;
        }

        if (
            line
                .match(/\d?\d green/g)
                ?.some((green) => parseInt(green.split(' ')[0]) > 13)
        ) {
            continue;
        }
        count += parseInt(game);
    }
    console.log(count);
}

async function Second() {
    const fileStream = fs.createReadStream('day2/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
    });

    let count = 0;
    for await (const line of rl) {
        const blues = Math.max(
            ...(line
                .match(/\d?\d blue/g)
                ?.map((blue) => parseInt(blue.split(' ')[0])) || 0)
        );
        const reds = Math.max(
            ...(line
                .match(/\d?\d red/g)
                ?.map((red) => parseInt(red.split(' ')[0])) || 0)
        );
        const greens = Math.max(
            ...(line
                .match(/\d?\d green/g)
                ?.map((green) => parseInt(green.split(' ')[0])) || 0)
        );
        count += blues * reds * greens;
    }
    console.log(count);
}

First();
Second();
