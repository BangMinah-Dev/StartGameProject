import LayoutAdmin from "../../../layouts/LayoutAdmin"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { Spinner, Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UPLOAD_PATH, getComingSoon, deleteComingsoon} from "../../../API/api"
import ModalDelete from "../../../components/modal/ModalDelete";

export default function ComingSoon(){
  const [comingsoon, setComingsoon] = useState([])

  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  
  useEffect(() => {
    async function fetchData(){
      const res = await getComingSoon()
      setComingsoon(res)
    }
    fetchData()
  },[])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (productID, productName) => {
    setProductID(productID);
    setProductName(productName);
    setShow(true);
  };

  function deleteItem() {
    const res = comingsoon.filter((product) => product.id !== productID);
    setComingsoon(res);
    deleteComingsoon(productID);
    setShow(false);
  }

  const comingsoonList = comingsoon.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td><img src={UPLOAD_PATH + item.image} alt={item.name}></img></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.price}</td>
      <td>{item.platform.map((item) => (
        <p className="plat-text" key={item.value}>{item.value}</p>
      ))}</td>
      <td>
        <p className="des-text">{item.description}</p>
      </td>
      <td>0%</td>
      <td>
        <Button
          variant="success"
          // onClick={() =>
          //   editItem(
          //     product.id,
          //     product.image,
          //     product.name,
          //     product.price,
          //     product.category,
          //     product.discount,
          //     product.description,
          //     product.windows.value,
          //     product.apple.value,
          //     product.android.value,
          //     product.playstation.value,
          //     product.windows.icon,
          //     product.apple.icon,
          //     product.android.icon,
          //     product.playstation.icon
          //   )
          // }
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() => handleShow(item.id, item.name)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  ))
  return(
    <div>
      <LayoutAdmin />
      {comingsoon.length === 0 ? (
        <div className="d-flex justify-content-center m-5 p-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div className="show-contents">
            <h3 className="mb-3">DANH SÁCH SẮP PHÁT HÀNH</h3>
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
              <tbody>{comingsoonList}</tbody>
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
    </div>
  )
}