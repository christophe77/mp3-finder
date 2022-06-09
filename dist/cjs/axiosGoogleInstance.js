"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.headers.common["content-type"] = "application/json";
axios_1.default.defaults.headers.common["user-agent"] = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Mobile Safari/537.36";
axios_1.default.defaults.headers.common["accept-encoding"] = "gzip";
axios_1.default.defaults.headers.common["connection"] = "keep-alive";
axios_1.default.defaults.headers.common["platform"] = "android";
axios_1.default.defaults.headers.common["sec-ch-ua-mobile"] = "?1";
axios_1.default.defaults.headers.common["sec-ch-ua-platform"] = "Android";
const axiosGoogleInstance = axios_1.default.create({
    baseURL: "https://www.google.com/search?q=",
    headers: {
        ["host"]: "www.google.com"
    }
});
exports.default = axiosGoogleInstance;
