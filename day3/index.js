const fs = require('fs');

async function First() {
    const lines = fs.readFileSync('day3/input.txt', 'utf-8').split('\r\n');
    let count = 0;
    for (let i = 0; i < lines.length; i++) {
        const matches = [...lines[i].matchAll(/\d+/g)];
        if (matches) {
            for (const match of matches) {
                const number = match[0];
                let part = false;
                const position = match.index;
                const positionEnd = position + (number.length - 1);
                if (position !== 0 && !/\d|\./.test(lines[i][position - 1])) {
                    part = true;
                }
                if (
                    positionEnd !== lines[i].length - 1 &&
                    !/\d|\./.test(lines[i][positionEnd + 1])
                ) {
                    part = true;
                }
                if (position === 0) {
                    for (let j = 0; j <= positionEnd + 1; j++) {
                        if (
                            (i !== 0 && !/\d|\./.test(lines[i - 1][j])) ||
                            (i !== lines.length - 1 &&
                                !/\d|\./.test(lines[i + 1][j]))
                        ) {
                            part = true;
                        }
                    }
                } else if (positionEnd === lines[i].length - 1) {
                    for (let j = position - 1; j <= positionEnd; j++) {
                        if (
                            (i !== 0 && !/\d|\./.test(lines[i - 1][j])) ||
                            (i !== lines.length - 1 &&
                                !/\d|\./.test(lines[i + 1][j]))
                        ) {
                            part = true;
                        }
                    }
                } else {
                    for (let j = position - 1; j <= positionEnd + 1; j++) {
                        if (
                            (i !== 0 && !/\d|\./.test(lines[i - 1][j])) ||
                            (i !== lines.length - 1 &&
                                !/\d|\./.test(lines[i + 1][j]))
                        ) {
                            part = true;
                        }
                    }
                }

                if (part) {
                    count += parseInt(number);
                }
            }
        }
    }
    console.log(count);
}

async function Second() {
    const lines = fs.readFileSync('day3/input.txt', 'utf-8').split('\r\n');
    let count = 0;
    const map = new Map();
    for (let i = 0; i < lines.length; i++) {
        const matches = [...lines[i].matchAll(/\d+/g)];
        if (matches) {
            for (const match of matches) {
                const number = match[0];
                const position = match.index;
                const positionEnd = position + (number.length - 1);
                if (position !== 0 && /\*/.test(lines[i][position - 1])) {
                    if (map.has(`${i},${position - 1}`)) {
                        map.get(`${i},${position - 1}`).push(number);
                    } else {
                        map.set(`${i},${position - 1}`, [number]);
                    }
                }
                if (
                    positionEnd !== lines[i].length - 1 &&
                    /\*/.test(lines[i][positionEnd + 1])
                ) {
                    if (map.has(`${i},${positionEnd + 1}`)) {
                        map.get(`${i},${positionEnd + 1}`).push(number);
                    } else {
                        map.set(`${i},${positionEnd + 1}`, [number]);
                    }
                }
                if (position === 0) {
                    for (let j = 0; j <= positionEnd + 1; j++) {
                        if (i !== 0 && /\*/.test(lines[i - 1][j])) {
                            if (map.has(`${i - 1},${j}`)) {
                                map.get(`${i - 1},${j}`).push(number);
                            } else {
                                map.set(`${i - 1},${j}`, [number]);
                            }
                        } else if (
                            i !== lines.length - 1 &&
                            /\*/.test(lines[i + 1][j])
                        ) {
                            if (map.has(`${i + 1},${j}`)) {
                                map.get(`${i + 1},${j}`).push(number);
                            } else {
                                map.set(`${i + 1},${j}`, [number]);
                            }
                        }
                    }
                } else if (positionEnd === lines[i].length - 1) {
                    for (let j = position - 1; j <= positionEnd; j++) {
                        if (i !== 0 && /\*/.test(lines[i - 1][j])) {
                            if (map.has(`${i - 1},${j}`)) {
                                map.get(`${i - 1},${j}`).push(number);
                            } else {
                                map.set(`${i - 1},${j}`, [number]);
                            }
                        } else if (
                            i !== lines.length - 1 &&
                            /\*/.test(lines[i + 1][j])
                        ) {
                            if (map.has(`${i + 1},${j}`)) {
                                map.get(`${i + 1},${j}`).push(number);
                            } else {
                                map.set(`${i + 1},${j}`, [number]);
                            }
                        }
                    }
                } else {
                    for (let j = position - 1; j <= positionEnd + 1; j++) {
                        if (i !== 0 && /\*/.test(lines[i - 1][j])) {
                            if (map.has(`${i - 1},${j}`)) {
                                map.get(`${i - 1},${j}`).push(number);
                            } else {
                                map.set(`${i - 1},${j}`, [number]);
                            }
                        } else if (
                            i !== lines.length - 1 &&
                            /\*/.test(lines[i + 1][j])
                        ) {
                            if (map.has(`${i + 1},${j}`)) {
                                map.get(`${i + 1},${j}`).push(number);
                            } else {
                                map.set(`${i + 1},${j}`, [number]);
                            }
                        }
                    }
                }
            }
        }
    }
    for (const [key, value] of map) {
        if (value.length === 2) {
            count += parseInt(value[0]) * parseInt(value[1]);
        }
    }
    console.log(count);
}

First();
Second();
