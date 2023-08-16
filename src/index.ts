import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');

reader.read();

let manUnitedWins = 0;

reader.data.forEach((line) => {
	if (line[1] === 'Man United' && line[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	}

	if (line[2] === 'Man United' && line[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
});

console.log(manUnitedWins);
