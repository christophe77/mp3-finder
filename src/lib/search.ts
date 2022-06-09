import axiosInstance from '../axiosInstance';

async function search(song: string): Promise<string[]> {
	const { axiosGoogleInstance } = axiosInstance;
	const query = encodeURI(`intitle:”index of” (mp3) ${song}`);
	try {
		const results = await axiosGoogleInstance.get(query);
		return results.data || [''];
	} catch (error) {
		throw new Error('request error');
	}
}

export default search;
