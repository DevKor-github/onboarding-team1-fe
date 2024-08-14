import api from "./api";
import TokenService from "./token.service";

// register 기능 추가 필요

export const login = (email: string, password: string)=>{
    return api
    .post("/signin", {
        email,
        password,
    })
    .then((response)=>{
        if(response.data.accesToken) {
            TokenService.setUser(response.data);
        }

        return response.data;
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
  