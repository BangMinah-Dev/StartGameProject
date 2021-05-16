import "./confirmModal.css"
import {Modal,Button } from "react-bootstrap"
export default function ConfirmModalAdd({show, handleClose, continueAdding}) {

  return (
    <>
      <Modal className="confirm-modal-add" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm thành công !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn tiếp tục thêm sản phẩm không ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button className="btn-continue" onClick={continueAdding}>
            Tiếp tục
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
