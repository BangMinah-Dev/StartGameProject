import "./product.css";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import ModalDelete from "../../../components/modal/ModalDelete";
import { UPLOAD_PATH, getProducts, deleteProduct } from "../../../API/api";
import { Link, useHistory } from "react-router-dom";
import LayoutAdmin from "../../../layouts/LayoutAdmin";

import {
  updateID,
  updateName,
  updateProductImage,
  updatePrice,
  updateCategory,
  updateDiscount,
  updateDescription,
  updateWindows,
  updateApple,
  updateAndroid,
  updatePlayStation,
  updateWindowsIcon,
  updateAppleIcon,
  updateAndroidIcon,
  updatePlayStationIcon,
} from ".././../../redux/sliceProductDetails";
import { useDispatch } from "react-redux";

export default function Products() {
  const [products, setProduct] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts();
      setProduct(res);
    }
    fetchData();
  }, []);

  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (productID, productName) => {
    setProductID(productID);
    setProductName(productName);
    setShow(true);
  };

  function deleteItem() {
    const res = products.filter((product) => product.id !== productID);
    setProduct(res);
    deleteProduct(productID);
    setShow(false);
  }

  function editItem(
    id,
    image,
    name,
    price,
    category,
    discount,
    description,
    windows,
    apple,
    android,
    playstation,
    windowsIcon,
    appleIcon,
    androidIcon,
    playstationIcon
  ) {
    dispatch(updateID(id));
    dispatch(updateProductImage(image));
    dispatch(updateName(name));
    dispatch(updatePrice(price));
    dispatch(updateCategory(category));
    dispatch(updateDiscount(discount));
    dispatch(updateDescription(description));
    dispatch(updateWindows(windows));
    dispatch(updateApple(apple));
    dispatch(updateAndroid(android));
    dispatch(updatePlayStation(playstation));
    dispatch(updateWindowsIcon(windowsIcon));
    dispatch(updateAppleIcon(appleIcon));
    dispatch(updateAndroidIcon(androidIcon));
    dispatch(updatePlayStationIcon(playstationIcon));
    history.push("./admin-edit");
  }

  const productsList = products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td className="product-image">
        <img src={UPLOAD_PATH + product.image} alt={product.name}></img>
      </td>
      <td className="name-text">
        <p>{product.name}</p>
      </td>
      <td>$ {product.price}</td>
      <td>{product.category}</td>
      <td>
        <p className="plat-text">
          {product.apple.icon.replace("fab fa-apple", "Apple")}
        </p>
        <p className="plat-text">
          {product.android.icon.replace("fab fa-google-play", "Android")}
        </p>
        <p className="plat-text">
          {product.windows.icon.replace("fab fa-windows", "Windows")}
        </p>
        <p className="plat-text">
          {product.playstation.icon.replace(
            "fab fa-playstation",
            "Play Station"
          )}
        </p>
      </td>
      <td>
        <p className="des-text">{product.description}</p>
      </td>
      <td>{product.discount}%</td>
      <td>
        <Button
          variant="success"
          onClick={() =>
            editItem(
              product.id,
              product.image,
              product.name,
              product.price,
              product.category,
              product.discount,
              product.description,
              product.windows.value,
              product.apple.value,
              product.android.value,
              product.playstation.value,
              product.windows.icon,
              product.apple.icon,
              product.android.icon,
              product.playstation.icon
            )
          }
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() => handleShow(product.id, product.name)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  ));

  return (
    <LayoutAdmin>
      {products.length === 0 ? (
        <div className="d-flex justify-content-center m-5 p-5">
          <Spinner animation="border"/>
        </div>
      ) : (
        <>
          <div className="show-contents">
            <h3 className="mb-3">DANH SÁCH SẢN PHẨM</h3>
            <Link to="/admin-add">
              <Button className="btn-addNew mt-1 mb-4">Thêm sản phẩm</Button>
            </Link>
            <Table bordered hover responsive>
              <thead className="text-center">
                <tr>
                  <th>ID</th>
                  <th>ẢNH GAME</th>
                  <th>TÊN GAME</th>
                  <th>GIÁ TIỀN</th>
                  <th>THỂ LOẠI</th>
                  <th>NỀN TẢNG</th>
                  <th className="des">MÔ TẢ</th>
                  <th>GIẢM GIÁ</th>
                  <th colSpan="2">CHỨC NĂNG</th>
                </tr>
              </thead>
              <tbody>{productsList}</tbody>
            </Table>
            <ModalDelete
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              productName={productName}
              deleteItem={deleteItem}
            />
          </div>
        </>
      )}
    </LayoutAdmin>
  );
}
