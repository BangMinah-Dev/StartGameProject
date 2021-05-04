import "./adminpage.css";
import StartGameLogo from "../../logo.svg";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function AdminMenu() {
  document.title = "ADMIN"
  return (
    <div className="container-fluid admin-menu">
      <Navbar className="container-fluid" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <div className="d-flex">
              <img
                className="logo-navbar"
                src={StartGameLogo}
                alt="Start Game Logo"
              ></img>
              <div className="logoName d-flex align-items-center ml-2">
                ADMIN
              </div>
            </div>
          </Navbar.Brand>
          <div className="ml-auto search-icon-mobile">
            <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
          </div>
          <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-0">
              <Nav.Link className="menu-item" to="/admin">
                Quản lý chung
              </Nav.Link>
              <NavDropdown
                className="menu-item"
                title="Danh sách quản lý"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/categories">Sản phẩm</NavDropdown.Item>
                <NavDropdown.Item href="">Ảnh bìa</NavDropdown.Item>
                <NavDropdown.Item href="">Sắp phát hành</NavDropdown.Item>
                <NavDropdown.Item href="">Nhập vai</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="menu-item" href="/news">
                Tin tức
              </Nav.Link>
              <Nav.Link className="menu-item" href="/tutorial">
                Hướng dẫn
              </Nav.Link>
              <div className="d-flex justify-content-start">
                <Button className="search-icon-desktop">
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
      </Navbar>
    </div>
  );
}
