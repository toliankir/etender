import { requestBody } from './requestBody';
import axios from 'axios';
import { ETenderFilter } from './types';

export function makeApiRequst(filter?: ETenderFilter){
    const modifyedRequestBody: any = { ...requestBody};
    if (filter) {
        if (filter.PriceFrom) {
            modifyedRequestBody.SearchFilter.PriceFrom = filter.PriceFrom;
        }
    }

    const requestUrl = 'https://e-tender.biz/api/services/etender/readTender/GetTenders';
    return axios.post(requestUrl, modifyedRequestBody);
}
