declare function format(urlList: string[]): {
    results: {
        id: number;
        url: string;
    }[];
};
export default format;
