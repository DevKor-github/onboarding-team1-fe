const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user") || "" );
    return user?.refreshToken;
  };
  
const getLocalAccessToken = () => {
    //console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user")===null){
      return "";
    } else{
      return localStorage.getItem("user");
    }
    /*const user = JSON.parse(localStorage.getItem("user") || "" );
    console.log("user : ", user);
    return user?.accessToken;*/
  };
  
const updateLocalAccessToken = (token:any) => {
    let user = JSON.parse(localStorage.getItem("user") || "" );
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  };
  
const getUser = () => {
    return JSON.parse(localStorage.getItem("user") || "" );
  };
  
const setUser = (user:{}) => {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  };
  
const removeUser = () => {
    localStorage.removeItem("user");
  };
  
const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
  };
  
export default TokenService;
  