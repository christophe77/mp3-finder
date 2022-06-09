"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = __importDefault(require("./lib/search"));
const parse_1 = __importDefault(require("./lib/parse"));
const filter_1 = __importDefault(require("./lib/filter"));
const format_1 = __importDefault(require("./lib/format"));
async function findMp3(song) {
    const googleResults = await (0, search_1.default)(song);
    const parsedResults = (0, parse_1.default)(googleResults);
    const filteredResults = await (0, filter_1.default)(parsedResults);
    const response = (0, format_1.default)(filteredResults);
    return response;
}
const mp3Finder = {
    findMp3,
};
exports.default = mp3Finder;
