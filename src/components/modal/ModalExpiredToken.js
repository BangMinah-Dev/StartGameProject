import "./confirmModal.css"
import { Button, Modal } from "react-bootstrap";

export default function ModalExpiredToken({show, handleClose}){
  return(
    <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="confirm-modal-expired"
        centered
      >
        <Modal.Header >
          <Modal.Title className="text-warning">Phiên đăng nhập hết hạn !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vui lòng đăng nhập lại để truy cập trang quản trị
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-continue" onClick={handleClose}>Đồng ý</Button>
        </Modal.Footer>
      </Modal>
  )
}