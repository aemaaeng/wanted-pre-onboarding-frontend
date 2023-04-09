import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

// 인증이 필요없는 요청
const axiosApi = (endpoint, options) => {
  const instance = axios.create({ baseURL: endpoint, ...options });
  return instance;
};

// TODO: 인증이 필요한 요청

export const defaultInstance = axiosApi(BASE_URL);
