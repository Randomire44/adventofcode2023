const fs = require('fs');

async function First() {
    const lines = fs.readFileSync('day4/input.txt', 'utf-8').split('\r\n');
    let count = 0;
    for (let i = 0; i < lines.length; i++) {
        let numbersWon = 0;
        [winningNumbers, numbers] = lines[i].split(':')[1].split('|');
        winningNumbers = winningNumbers
            .split(' ')
            .map((x) => parseInt(x))
            .filter(Boolean);
        numbers = numbers
            .split(' ')
            .map((x) => parseInt(x))
            .filter(Boolean);
        for (let j = 0; j < numbers.length; j++) {
            if (winningNumbers.includes(numbers[j])) {
                numbersWon++;
            }
        }
        if (numbersWon > 0) {
            count += Math.pow(2, numbersWon - 1);
        }
    }
    console.log(count);
}

async function Second() {
    const lines = fs.readFileSync('day4/input.txt', 'utf-8').split('\r\n');
    let count = 0;
    const cards = new Map();
    for (let i = 0; i < lines.length; i++) {
        if (cards.has(i)) {
            cards.set(i, cards.get(i) + 1);
        } else {
            cards.set(i, 1);
        }
        for (let k = 1; k <= cards.get(i); k++) {
            let numbersWon = 0;
            [winningNumbers, numbers] = lines[i].split(':')[1].split('|');
            winningNumbers = winningNumbers
                .split(' ')
                .map((x) => parseInt(x))
                .filter(Boolean);
            numbers = numbers
                .split(' ')
                .map((x) => parseInt(x))
                .filter(Boolean);
            for (let j = 0; j < numbers.length; j++) {
                if (winningNumbers.includes(numbers[j])) {
                    numbersWon++;
                }
            }
            for (let j = 1; j <= numbersWon; j++) {
                if (cards.has(i + j)) {
                    cards.set(i + j, cards.get(i + j) + 1);
                } else {
                    cards.set(i + j, 1);
                }
            }
        }
    }

    console.log(Array.from(cards.values()).reduce((a, b) => a + b));
}

First();
Second();
