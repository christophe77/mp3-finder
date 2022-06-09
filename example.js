const mp3Finder = require("./dist/cjs").default;

const { findMp3 } = mp3Finder;

async function searchSong() {
    const results = await findMp3("enter sandman");
    console.log(results)
}

searchSong();