function format(urlList) {
    const formattedResults = urlList.map((url, index) => {
        return { id: index, url };
    });
    return { results: formattedResults || [''] };
}
export default format;
