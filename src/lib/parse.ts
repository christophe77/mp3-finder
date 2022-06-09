function parse(html: any): string[] {
	const rawTagParse = html.split('<a class');
	const rawUrlList: string[] = [''];
	rawTagParse.forEach((line: string) => {
		if (line.includes('"cz3goc BmP5tf" role="presentation" href="')) {
			const extractUrl = line.substring(
				line.lastIndexOf('href=') + 6,
				line.lastIndexOf(' ping'),
			);
			const sanitizedUrl = extractUrl.replace('"', '');
			rawUrlList.push(sanitizedUrl);
		}
	});
	const urlList = rawUrlList.filter((url) => {
		return url !== '';
	});
	return urlList;
}
export default parse;
