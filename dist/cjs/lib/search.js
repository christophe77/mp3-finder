"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance"));
async function search(song) {
    const { axiosGoogleInstance } = axiosInstance_1.default;
    const query = encodeURI(`intitle:”index of” (mp3) ${song}`);
    try {
        const results = await axiosGoogleInstance.get(query);
        return results.data || [''];
    }
    catch (error) {
        console.log(error);
        throw new Error('request error');
    }
}
exports.default = search;
