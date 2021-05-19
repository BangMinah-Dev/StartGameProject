import "./newarrival.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, UPLOAD_PATH } from "../../API/api";
import { Spinner } from "react-bootstrap";

export default function NewArrival() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const res = await getProducts(1,12,"id","desc");
      const data = await res.json()
      setProduct(data);
    })();
  }, []);

  const productsList = product.map((item) => (
    <div className="new-item" key={item.id}>
      <div className="picture">
        <img src={UPLOAD_PATH + item.image} alt={item.name}></img>
      </div>
      <div className="content">
        <a href="/">
          <h4>{item.name}</h4>
        </a>
        <a href="/">
          <p className="cate">{item.category}</p>
        </a>
        <p className="plat">
          {item.windows.icon === "" ? (
            ""
          ) : (
            <i className={`windows icon ${item.windows.icon}`}></i>
          )}
          {item.playstation.icon === "" ? (
            ""
          ) : (
            <i className={`playstation icon ${item.playstation.icon}`}></i>
          )}
          {item.android.icon === "" ? (
            ""
          ) : (
            <i className={`android icon ${item.android.icon}`}></i>
          )}
          {item.apple.icon === "" ? (
            ""
          ) : (
            <i className={`apple icon ${item.apple.icon}`}></i>
          )}
        </p>
        <div className="button-action">
          <button className="btn btn-primary btn-price">$ {item.price}</button>
          <button className="btn btn-primary btn-cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
        {item.discount === 0 ? (
          ""
        ) : (
          <div className="discount">
            <div className="sale">
              <p>-{item.discount}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  ));
  return (
    <div className="container mb-5">
      <h3 className="mb-4">Game Mới Đăng</h3>
      {product.length === 0 ? (
        <div className="d-flex justify-content-center m-5 p-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div className="new-arrival">{productsList}</div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Link to="/categories">
              <button className="btn-load-more">Xem Thêm</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
