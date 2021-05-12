import LayoutAdmin from "../../layouts/LayoutAdmin"
import {useHistory} from "react-router-dom"
export default function Admin() {
  document.title = "START GAME - ADMIN";

  const history = useHistory()
  if(localStorage.getItem("token") === null){
    history.push("/login")
  }

  return (
    <div className="container-fluid">
      <LayoutAdmin/>
      <h3 className="text-center">QUẢN LÝ CHUNG</h3>
    </div>
  );
}
