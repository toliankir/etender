import { requestBody } from './requestBody';
import axios from 'axios';

export function makeApiRequst(){
    const requestUrl = 'https://e-tender.biz/api/services/etender/readTender/GetTenders';
    return axios.post(requestUrl, requestBody);
}