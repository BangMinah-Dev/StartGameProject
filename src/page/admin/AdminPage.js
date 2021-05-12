// import "./adminpage.css";
import LayoutAdmin from "../../layouts/LayoutAdmin"
// import AdminMenu from "./AdminMenu";
// import Products from "./products/Products";
export default function Admin() {
  document.title = "START GAME - ADMIN";
  return (
    <div className="container-fluid">
      <LayoutAdmin/>
      <h3 className="text-center">QUẢN LÝ CHUNG</h3>
    </div>
  );
}
