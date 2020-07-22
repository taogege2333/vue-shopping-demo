import Http from "../utils/http";
import { getHomeUrl, getDetailUrl } from "../config/urls";

const http = new Http();

export const getHomeData = () => {
  return http.get(getHomeUrl)
}

export const getDetail = (id) => {
  return http.get(getDetailUrl + "/" + id);
}