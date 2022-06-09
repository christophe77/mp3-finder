var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import blackList from '../utils/blackList';
import axiosInstance from '../axiosInstance';
async function checkIfOnline(urlList) {
    var e_1, _a;
    const { axiosOnlineInstance } = axiosInstance;
    const onlineWebsites = [];
    try {
        for (var urlList_1 = __asyncValues(urlList), urlList_1_1; urlList_1_1 = await urlList_1.next(), !urlList_1_1.done;) {
            const url = urlList_1_1.value;
            try {
                const response = await axiosOnlineInstance.get(url);
                if (response.status === 200) {
                    onlineWebsites.push(url);
                }
            }
            catch (error) {
                //
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (urlList_1_1 && !urlList_1_1.done && (_a = urlList_1.return)) await _a.call(urlList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return onlineWebsites;
}
const isNotBlackListed = (url) => {
    return blackList.every((domain) => {
        if (url.includes(domain)) {
            return false;
        }
        return true;
    });
};
function checkIfBlackListed(urlList) {
    const whiteList = urlList.filter((url) => {
        return isNotBlackListed(url);
    });
    return whiteList;
}
async function filter(urlList) {
    const whiteList = checkIfBlackListed(urlList);
    const onlineList = await checkIfOnline(whiteList);
    return onlineList;
}
export default filter;
