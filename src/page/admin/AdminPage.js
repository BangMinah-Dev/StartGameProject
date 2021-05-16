import "./adminPage.css"
import LayoutAdmin from "../../layouts/LayoutAdmin";
import ProductsListIcon from "../../PRSLIST.svg";
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
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 mb-2">
            <div className="mng-item d-flex justify-content-between">
              <div className="mr-1">
                <div className="count-number">{totalProduct.length}</div>
                <div>Số lượng game</div>
              </div>
              <div className="d-flex align-items-center">
                <img src={ProductsListIcon} alt="products-list-icon" width="50px"></img>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-2">
            <div className="mng-item d-flex justify-content-between">
              <div className="mr-1">
                <div className="count-number">{totalProduct.length}</div>
                <div>Số lượng game</div>
              </div>
              <div className="d-flex align-items-center">
                <img src={ProductsListIcon} alt="products-list-icon" width="50px"></img>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-2">
            <div className="mng-item d-flex justify-content-between">
              <div className="mr-1">
                <div className="count-number">{totalProduct.length}</div>
                <div>Số lượng game</div>
              </div>
              <div className="d-flex align-items-center">
                <img src={ProductsListIcon} alt="products-list-icon" width="50px"></img>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-2">
            <div className="mng-item d-flex justify-content-between">
              <div className="mr-1">
                <div className="count-number">{totalProduct.length}</div>
                <div>Số lượng game</div>
              </div>
              <div className="d-flex align-items-center">
                <img src={ProductsListIcon} alt="products-list-icon" width="50px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
