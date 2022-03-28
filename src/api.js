import axios from "axios";

const listApi = axios.get({
    baseURL: 'http://49.50.167.136:9871/api/patient/list',
    params: {
        page: '1',
        length: '0',
        order_desc: 'false'
    }
})

