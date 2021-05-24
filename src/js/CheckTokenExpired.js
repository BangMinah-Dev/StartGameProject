import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";

export function CheckTokenExpired(){
  const history = useHistory();

  let token = localStorage.getItem("token");
  let decodedToken = jwt_decode(token);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    history.push("/login")
    // TRẢ VỀ GIÁ TRỊ ĐỂ HIỂN THỊ MODAL 
    return true
  }else{
    return false
  }

}