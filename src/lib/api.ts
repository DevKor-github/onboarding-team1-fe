import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

//request interceptor 생성 
//auth용 token 검사 후 header에 첨부
api.interceptors.request.use();

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response.data.message || error.message;
    console.log(message);

    //api응답 error handling 추가

    return Promise.reject(error);
  }
)