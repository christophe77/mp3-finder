import search from './lib/search';
import parse from './lib/parse';
import filter from './lib/filter';
import format from './lib/format';
async function findMp3(song) {
    const googleResults = await search(song);
    const parsedResults = parse(googleResults);
    const filteredResults = await filter(parsedResults);
    const response = format(filteredResults);
    return response;
}
const mp3Finder = {
    findMp3,
};
export default mp3Finder;
