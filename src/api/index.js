import axios from "axios";
import cookie from 'cookies-js'


export const getAllGoods = () => {
    const token = cookie('_token');
    return axios.get("user/123" );
};