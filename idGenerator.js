'use strict'

let generateRandomID = (idLen) => {
    let generatedID = '';
    let coinFlip = 0;
    let counter = 0;
    let char = '';
    let nums = '0123456789';
    let chars = 'abcdefghijklmnopqrstuvwxyz';

    while (counter < idLen) {
        coinFlip = Math.floor(Math.random() * 2);

        if (coinFlip == 0) {
            char = nums[Math.floor(Math.random() * nums.length)];
            generatedID += char;
        }
        else {
            char = chars[Math.floor(Math.random() * chars.length)];
            generatedID += char;
        }

        counter++;
    }

    return generatedID;
}

exports.generateRandomID = generateRandomID;