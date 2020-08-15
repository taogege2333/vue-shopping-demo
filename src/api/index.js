import Http from "../utils/http";
import {
  getHomeUrl,
  getDetailUrl,
  getLoginUrl,
  getAddressListUrl,
  getAddressDetailUrl,
  updateAddressUrl,
  addAddressUrl,
  deleteAddressUrl
} from "../config/urls";

const http = new Http();

export const getHomeData = () => {
  return http.get(getHomeUrl);
};

export const getDetail = id => {
  return http.get(getDetailUrl, { id });
};

export const login = (username, password) => {
  return http.post(getLoginUrl, { username, password });
};

export const getAddressList = () => {
  return http.get(getAddressListUrl);
}

export const getAddressDetail = (id) => {
  return http.get(getAddressDetailUrl, {id});
}

export const updateAddress = addressDetail => {
  return http.post(updateAddressUrl, {addressDetail})
}

export const addAddress = addressDetail => {
  return http.post(addAddressUrl, {addressDetail});
}

export const deleteAddress = id => {
  return http.post(deleteAddressUrl, {id});
}
