import fetchJsonp from 'fetch-jsonp';
import qs from'qs';

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categorySearch';
const APP_ID = 'dj00aiZpPVZLYVoyQzVmT1BIbyZzPWNvbnN1bWVyc2VjcmV0Jng9YWY-';

const receiveData = (categoriesResponse, error) => ({
    type: 'RECEIVE_CATEGORIES',
    payload: { categoriesResponse, error }
})

export const fetchCategories = () => {
    return async (dispath) => {

        const queryString = qs.stringify({
            appid: APP_ID,
            category_id: '1'
        });

        try {
            const response = await fetchJsonp(`${API_URL}?${queryString}`);
            const categoriesResponse = await response.json();
            dispath(receiveData(categoriesResponse, null));
        } catch (err) {
            dispath(receiveData(null, err));
        }
    };
};