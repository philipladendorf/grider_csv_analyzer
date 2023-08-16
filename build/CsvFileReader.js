"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((line) => line.split(','))
            .map((line) => {
            return [
                (0, utils_1.dateStringToDate)(line[0]),
                line[1],
                line[2],
                parseInt(line[3]),
                parseInt(line[4]),
                line[5],
                line[6],
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
