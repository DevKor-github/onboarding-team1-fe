import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/" // 추후 변경 필요

// register 기능 추가 필요

export const login = (email: string, password: string)=>{
    return axios
    .post(API_URL + "signin", {
        email,
        password,
    })
    .then((response)=>{
        if(response.data.accesToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

export const logout = ()=>{
    localStorage.removeItem("user");
}

export const getCurrentUser = () =>{ // 역할 뭔지 모르겠음
    const userStr = localStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
}
