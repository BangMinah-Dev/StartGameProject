import "./adminPage.css";
import LayoutAdmin from "../../layouts/LayoutAdmin";
import ProductsListIcon from "../../PRSLIST.svg";
import UserIcon from "../../user.svg"
import PreOrderIcon from "../../preorder.svg"
import SaleIcon from "../../sale.svg"
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, getComingSoon } from "../../API/api";
export default function Admin() {
  document.title = "START GAME - ADMIN";

  const history = useHistory();
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }

  const [totalProduct, setTotalProduct] = useState([]);
  const [comingsoon, setComingsoon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultGetProducts = await getProducts();
      setTotalProduct(resultGetProducts);
      const resultGetComingSoon = await getComingSoon();
      setComingsoon(resultGetComingSoon);
    }
    fetchData();
  }, []);
  return (
    <div>
      <LayoutAdmin />
      <div className="show-contents">
        <h3 className="mt-2 mb-4">QUẢN LÝ CHUNG</h3>
        <div className="row-report">

          <Link to="/admin-products">
            <div className="report-item">
              <div className="report-content">
                <div className="count-number">{totalProduct.length}</div>
                <div className="report-text">Game đang phát hành</div>
              </div>
              <div className="report-icon">
                <img src={ProductsListIcon} alt="productsList"></img>
              </div>
            </div>
          </Link>
          
          <Link to="/admin-products">
            <div className="report-item">
              <div className="report-content">
                <div className="count-number">{comingsoon.length}</div>
                <div className="report-text">Game sắp phát hành</div>
              </div>
              <div className="report-icon">
                <img src={PreOrderIcon} alt="productsList"></img>
              </div>
            </div>
          </Link>
          
          <Link to="/admin-products">
            <div className="report-item">
              <div className="report-content">
                <div className="count-number">15</div>
                <div className="report-text">Game đang giảm giá</div>
              </div>
              <div className="report-icon">
                <img src={SaleIcon} alt="productsList"></img>
              </div>
            </div>
          </Link>

          <Link to="/admin-products">
            <div className="report-item">
              <div className="report-content">
                <div className="count-number">168</div>
                <div className="report-text">Tài khoản người dùng</div>
              </div>
              <div className="report-icon">
                <img src={UserIcon} alt="productsList"></img>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
