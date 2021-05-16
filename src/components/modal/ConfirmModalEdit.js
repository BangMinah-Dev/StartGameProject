import "./confirmModal.css"
import {Modal } from "react-bootstrap"
export default function ConfirmModalAdd({show}) {
  return (
    <>
      <Modal className="confirm-modal-add" show={show} centered>
        <Modal.Body className="text-success text-center">Sửa sản phẩm thành công !</Modal.Body>
      </Modal>
    </>
  );
}
