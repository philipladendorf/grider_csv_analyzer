"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
reader.data.forEach((line) => {
    if (line[1] === 'Man United' && line[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    if (line[2] === 'Man United' && line[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
});
console.log(manUnitedWins);
