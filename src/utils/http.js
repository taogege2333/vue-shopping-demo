import axios from "axios";
import qs from "qs";

class Http {
  constructor() {
    this.axios = axios;

    // 配置
    // 暂时没有

    // 相应拦截器
    this.axios.interceptors.response.use(
      response => {
        return response.data;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
  get(url, data = {}) {
    return this.axios.get(url, { params: data });
  }
  post(url, data = {}) {
    for(let k in data) {
      data[k] = JSON.stringify(data[k]);
    }
    return this.axios.post(url, qs.stringify(data));
  }
}

export default Http;
