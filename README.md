# mp3-finder

Search the web for mp3 from a given query string.
Written with typescript and working server and browser side.

## Installation

    yarn add mp3-finder
    // or
    npm i mp3-finder

## Usage

    const mp3Finder = require("mp3-finder").default;

    const { findMp3 } = mp3Finder;

    async function searchSong() {
        const results = await findMp3("enter sandman");
        console.log(results)
    }

    searchSong();

the return is an object with a results array :

    {
        results : [
            {
                id: 0,
                url: "http://wwwwwwwwwwwwwwwwww...."
            },
            {
                id: 1,
                url: "http://wwwwwwwwwwwwwwwwww...."
            }
        ]
    }
