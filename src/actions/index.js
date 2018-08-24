import types from './types';
import axios from 'axios';


const BASE_URL= 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_jCarlisle';

export function get_all_list_data(){
    const resp = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type:types.GET_ALL_LIST_DATA,
        payload: resp

    };
}

export function add_item(item){
    const resp = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: resp
    };

}