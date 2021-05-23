import { Button, Modal } from "bootstrap";

export default function ModalExpiredToken(){
  
  return(
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Phiên đăng nhập hết hạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn cần đăng nhập lại để truy cập trang quản trị
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn">Đồng ý</Button>
        </Modal.Footer>
      </Modal>
  )
}