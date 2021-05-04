import StartGameLogo from "../../logo.svg";
import "./navbar.css";
import { Navbar, Nav, NavDropdown, Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavbarCustom() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="container-fluid" expand="lg" sticky="top">
        <div className="container">
          <Navbar.Brand href="/">
            <div className="d-flex">
              <img
                className="logo-navbar"
                src={StartGameLogo}
                alt="Start Game Logo"
              ></img>
              <div className="logoName d-flex align-items-center ml-2">
                START GAME
              </div>
            </div>
          </Navbar.Brand>
          <div className="ml-auto search-icon-mobile" onClick={handleShow}>
            <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
          </div>
          <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-0">
              <Nav.Link className="menu-item" href="/">
                Trang chủ
              </Nav.Link>
              <NavDropdown
                className="menu-item"
                title="Thể loại"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/categories">Tất Cả</NavDropdown.Item>
                <NavDropdown.Item href="">Hành Động</NavDropdown.Item>
                <NavDropdown.Item href="">Chiến thuật</NavDropdown.Item>
                <NavDropdown.Item href="">Nhập vai</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="menu-item" href="/news">
                Tin tức
              </Nav.Link>
              <Nav.Link className="menu-item" href="/tutorial">
                Hướng dẫn
              </Nav.Link>
              <div className="d-flex justify-content-start">
                <Button className="search-icon-desktop" onClick={handleShow}>
                  <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
                </Button>
                <Nav.Link className="cart">
                  <FontAwesomeIcon
                    className="icon menu-item"
                    icon={faShoppingCart}
                  />
                  <div className="noti">
                    <span>10</span>
                  </div>
                </Nav.Link>
                <Nav.Link href="/login" className="user-icon">
                  <FontAwesomeIcon className="icon menu-item" icon={faUser} />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* Modal Search */}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tìm kiếm</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Nhập tên game cần tìm" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="go-search" onClick={handleClose}>
            Tìm Kiếm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
