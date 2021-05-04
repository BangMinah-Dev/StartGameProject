import "./adminpage.css";
import AdminMenu from "./AdminMenu";
import Products from "./products/Products";
export default function Admin() {
  document.title = "START GAME - ADMIN";
  return (
    <div className="container-fluid">
      <AdminMenu />
      <div className="show-content">
        <Products />
      </div>
    </div>
  );
}
