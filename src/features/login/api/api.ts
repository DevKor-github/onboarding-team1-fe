import axios, {AxiosResponse, AxiosRequestConfig} from "axios";
import TokenService from "./token.service.ts";

const instance = axios.create({
    headers: {
        "Content-Type": "application/json", // 추가학습 필요
        "Authorization": "",
    },
});

instance.interceptors.request.use(
    (config) =>{
        
        const token = TokenService.getLocalAccessToken();
        if(token){
            config.headers!.Authorization = 'Bearer ' + token;
        } else{
            config.headers!.Authorization = `${token}`;
        }
        console.log("request\n", config);
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) =>{
        console.log("res\n", res);
        return res;
    },
    async (err) =>{
        
        const originalConfig = err.config;
        console.error("problem", err.tostring, originalConfig);

        if (originalConfig && originalConfig.url !== "/users/signin" && err.response) { // 수정 필요
            if(err.response.status == 401 && !originalConfig._retry){
                originalConfig._retry = true;

                try{
                    const rs = await instance.post("/api/token", {
                        refreshToken: TokenService.getLocalRefreshToken(),
                    });

                    const {accessToken} = rs.data;
                    TokenService.updateLocalAccessToken(accessToken);

                    return instance(originalConfig);
                } catch(_error) {
                    console.log("Token refresh failed", _error);
                    return Promise.reject(_error);
                }
            }
        }
        
        return Promise.reject(err);
    }
);

export default instance;