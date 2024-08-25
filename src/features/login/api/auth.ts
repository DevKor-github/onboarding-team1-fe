import { Link } from "react-router-dom";
import api from "./api";
import TokenService from "./token.service";

// register 기능 추가 필요
const loginURL:string = "http://localhost:8080/users/login";
export const login = (email: string, password: string)=>{
    return api
    .post(loginURL, { email, password })
    .then((response) => {
        console.log("response\n", response );
        
        if (response.headers['content-type']?.includes('application/json')) {
            localStorage.setItem("user", response.data);
            return response.data;
        } else {
            
            throw new Error("Invalid JSON response");
        }
    })
    .catch((error) => {
        console.error("Failed to parse JSON response:", error);
        // 추가적인 오류 처리
    });
};

export const logout = ()=>{
    TokenService.removeUser();
}

export const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user")||"");
}

const AuthService = {
    login,
    logout,
    getCurrentUser,
  };
  
  export default AuthService;
  