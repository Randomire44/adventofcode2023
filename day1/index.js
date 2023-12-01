const fs = require('fs');
const readline = require('readline');

async function First() {
    const fileStream = fs.createReadStream('day1/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
    });

    const regex = /[0-9]/g;

    let count = 0;
    for await (const line of rl) {
        const match = line.match(regex);
        let firstNumber = match[0];
        let lastNumber = match[match.length - 1];
        count += parseInt(firstNumber + lastNumber);
    }
    console.log(count);
}

async function Second() {
    function lettersToInt(str) {
        switch (str) {
            case 'one':
                return '1';
            case 'two':
                return '2';
            case 'three':
                return '3';
            case 'four':
                return '4';
            case 'five':
                return '5';
            case 'six':
                return '6';
            case 'seven':
                return '7';
            case 'eight':
                return '8';
            case 'nine':
                return '9';
            default:
                return str;
        }
    }

    const fileStream = fs.createReadStream('day1/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
    });

    const regex = /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g;

    let count = 0;
    for await (const line of rl) {
        const matches = Array.from(line.matchAll(regex), (x) => x[1]);
        let firstNumber = lettersToInt(matches[0]);
        let lastNumber = lettersToInt(matches[matches.length - 1]);
        count += parseInt(firstNumber + lastNumber);
    }
    console.log(count);
}

First();
Second();
