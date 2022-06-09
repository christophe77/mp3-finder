declare function findMp3(song: string): Promise<{
    results: {
        id: number;
        url: string;
    }[];
}>;
declare const mp3Finder: {
    findMp3: typeof findMp3;
};
export default mp3Finder;
