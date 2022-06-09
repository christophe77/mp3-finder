"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(urlList) {
    const formattedResults = urlList.map((url, index) => {
        return { id: index, url };
    });
    return { results: formattedResults || [''] };
}
exports.default = format;
