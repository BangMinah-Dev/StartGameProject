import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";

export function CheckTokenExpired(){
  const history = useHistory();

  let token = localStorage.getItem("token");
  let decodedToken = jwt_decode(token);
  // console.log("Decoded Token", decodedToken);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    // console.log("Token expired.");
    history.push("/login")
  } 
}