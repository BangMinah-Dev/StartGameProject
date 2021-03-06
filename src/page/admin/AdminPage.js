import "./adminPage.css";
import LayoutAdmin from "../../layouts/LayoutAdmin";
import ProductsListIcon from "../../PRSLIST.svg";
import UserIcon from "../../user.svg";
import PreOrderIcon from "../../preorder.svg";
import SaleIcon from "../../sale.svg";
import ChartBar from "../../components/chart/ChartBar";
import ChartPie from "../../components/chart/ChartPie";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, getComingSoon } from "../../API/api";
import { CheckTokenExpired } from "../../js/CheckTokenExpired";
import { updateTokenExpired } from "../../redux/sliceAdminProfile";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";

export default function Admin() {
  const history = useHistory();
  const dispatch = useDispatch();
  // KIỂM TRA TOKEN TỒN TẠI KHÔNG
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  } else {
    // KIỂM TRA TOKEN HẾT HẠN
    const checkToken = CheckTokenExpired();
    dispatch(updateTokenExpired(checkToken));
  }

  const [dataReport, setDataReport] = useState({
    totalProduct: [],
    comingsoon: [],
  });

  useEffect(() => {
    document.title = "StartGame - Admin";

    async function fetchData() {
      const resultGetProducts = await getProducts();
      const resultGetComingSoon = await getComingSoon();
      const dataGetProducts = await resultGetProducts.json()
      const dataGetComingSoon = await resultGetComingSoon.json()

      setDataReport({
        totalProduct: dataGetProducts,
        comingsoon: dataGetComingSoon
      })

    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <LayoutAdmin />
      <div className="show-contents">
        <h3 className="mt-2 mb-4">QUẢN LÝ CHUNG</h3>
        {dataReport.comingsoon.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <div className="row-report">
              <Link to="/admin-products">
                <div className="report-item">
                  <div className="report-content">
                    <div className="count-number">
                      {dataReport.totalProduct.length}
                    </div>
                    <div className="report-text">Game đang phát hành</div>
                  </div>
                  <div className="report-icon">
                    <img src={ProductsListIcon} alt="productsList"></img>
                  </div>
                </div>
              </Link>

              <Link to="/admin-comingsoon">
                <div className="report-item">
                  <div className="report-content">
                    <div className="count-number">
                      {dataReport.comingsoon.length}
                    </div>
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
            <div className="row chart-custom">
              <div className="chart-item col-md-6 col-lg-8">
                <ChartBar></ChartBar>
              </div>
              <div className="chart-item col-md-6 col-lg-4">
                <ChartPie></ChartPie>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
