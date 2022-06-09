import axiosInstance from '../axiosInstance';
async function search(song) {
    const { axiosGoogleInstance } = axiosInstance;
    const query = encodeURI(`intitle:”index of” (mp3) ${song}`);
    try {
        const results = await axiosGoogleInstance.get(query);
        return results.data || [''];
    }
    catch (error) {
        console.log(error);
        throw new Error('request error');
    }
}
export default search;
