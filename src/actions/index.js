import types from './types';
import axios from 'axios';


const BASE_URL= 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_jCarlisle';
const ScottsKey = "?key=c618_demouser";

export function get_all_list_data(){
    const resp = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type:types.GET_ALL_LIST_DATA,
        payload: resp

    };
}