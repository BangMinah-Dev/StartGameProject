import LayoutAdmin from "../../layouts/LayoutAdmin";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../API/api";
export default function Admin() {
  document.title = "START GAME - ADMIN";

  const history = useHistory();
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }

  const [totalProduct, setTotalProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts();
      setTotalProduct(res);
    }
    fetchData();
  }, []);

  return (
    <div>
      <LayoutAdmin />
      <div className="show-contents">
        <h3 className="mt-2 mb-4">QUẢN LÝ CHUNG</h3>
        <div>Số lượng game : {totalProduct.length}</div>
      </div>
    </div>
  );
}
