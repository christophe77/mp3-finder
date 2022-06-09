function format(urlList: string[]) {
	const formattedResults = urlList.map((url: string, index: number) => {
		return { id: index, url };
	});
	return { results: formattedResults || [''] };
}

export default format;
