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
import { Link } from "react-router-dom";

export default function NavbarCustom() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="container-fluid" expand="lg" sticky="top">
        <div className="container">
          <Link to="/">
            <Navbar.Brand>
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
          </Link>
          <div className="ml-auto search-icon-mobile" onClick={handleShow}>
            <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
          </div>
          <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-0">
              <Link to="/" className="menu-item nav-link" href="/">
                Trang chủ
              </Link>
              <NavDropdown
                className="menu-item"
                title="Thể loại"
                id="basic-nav-dropdown"
              >
                <Link to="/categories" className="dropdown-item">Tất Cả</Link>
                <Link to="/news" className="dropdown-item">Hành Động</Link>
                <Link to="/tutorial" className="dropdown-item">Chiến thuật</Link>
                <Link to="/login" className="dropdown-item">Nhập vai</Link>
              </NavDropdown>
              <Link className="menu-item nav-link" to="/news">
                Tin tức
              </Link>
              <Link className="menu-item nav-link" to="/admin">
                Hướng dẫn
              </Link>
              <div className="d-flex justify-content-start">
                <Button className="search-icon-desktop" onClick={handleShow}>
                  <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
                </Button>
                <Link to="/cart" className="cart nav-link">
                  <FontAwesomeIcon
                    className="icon menu-item"
                    icon={faShoppingCart}
                  />
                  <div className="noti">
                    <span>10</span>
                  </div>
                </Link>
                <Link to="/login" className="nav-link">
                  <FontAwesomeIcon className="icon menu-item user-icon" icon={faUser} />
                </Link>
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
