import "./modalDelete.css"
import {Modal, Button} from "react-bootstrap"
export default function ModalDelete({show, handleClose, productName, deleteItem}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title-delete">Bạn có chắc muốn xóa sản phẩm này ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-delete">
          {productName}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="danger" onClick={deleteItem}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
