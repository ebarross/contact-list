import { AxiosResponse } from 'axios';
import { HttpRequest, HttpResponse } from '../interfaces/http';
import axios from './axios';

export default {
  request: async (data: HttpRequest): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  },
};
