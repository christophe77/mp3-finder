import blackList from '../utils/blackList';
import axiosInstance from '../axiosInstance';

async function checkIfOnline(urlList: string[]) {
	const { axiosOnlineInstance } = axiosInstance;
	const onlineWebsites: string[] = [];
	for await (const url of urlList) {
		try {
			const response = await axiosOnlineInstance.get(url);
			if (response.status === 200) {
				onlineWebsites.push(url);
			}
		} catch (error) {
			//
		}
	}
	return onlineWebsites;
}
const isNotBlackListed = (url: string) => {
	return blackList.every((domain: string) => {
		if (url.includes(domain)) {
			return false;
		}
		return true;
	});
};

function checkIfBlackListed(urlList: string[]) {
	const whiteList: string[] = urlList.filter((url: string) => {
		return isNotBlackListed(url);
	});
	return whiteList;
}

async function filter(urlList: string[]) {
	const whiteList = checkIfBlackListed(urlList);
	const onlineList = await checkIfOnline(whiteList);
	return onlineList;
}
export default filter;
