import {Modal, Button} from "react-bootstrap"
export default function ModalDelete({show, handleClose, productName, deleteItem}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có chắc muốn xóa sản phẩm này ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productName}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={deleteItem}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
