import axios from "axios";

class Http {
  constructor() {
    this.axios = axios;

    // 配置
    // 暂时没有

    // 相应拦截器
    this.axios.interceptors.response.use((response) => {
      return response.data;
    }, (error) => {
      return Promise.reject(error);
    })
  }
  get(url, data = {}) {
    return this.axios.get(url, {params: data});
  }
  post(url, data = {}) {
    return this.axios.post(url, data);
  }
}

export default Http;