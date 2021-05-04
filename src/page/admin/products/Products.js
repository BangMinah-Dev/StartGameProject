import "./product.css";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { UPLOAD_PATH, getProducts } from "../../../API/api";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts();
      setProduct(res);
    }
    fetchData();
  }, []);

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
          {product.apple.replace("fab fa-apple", "Apple")}
        </p>
        <p className="plat-text">
          {product.android.replace("fab fa-google-play", "Android")}
        </p>
        <p className="plat-text">
          {product.windows.replace("fab fa-windows", "Windows")}
        </p>
        <p className="plat-text">
          {product.playstation.replace("fab fa-playstation", "Play Station")}
        </p>
      </td>
      <td>
        <p className="des-text">{product.description}</p>
      </td>
      <td>{product.discount}%</td>
      <td>
        <Button variant="success">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </td>
      <td>
        <Button variant="danger">
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h3 className=" mb-3">DANH SÁCH SẢN PHẨM</h3>
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
    </div>
  );
}
