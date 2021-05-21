import "./admin.css";
import StartGameLogo from "../../logo.svg";
import { Navbar, Nav, NavDropdown, Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UPLOAD_PATH } from "../../API/api"
export default function AdminMenu() {

  const avatar = localStorage.getItem("avatar")

  return (
    <div className="container-fluid admin-menu">
      <Navbar className="container-fluid" expand="lg" sticky="top">
        <Link to="/">
          <Navbar.Brand>
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
        </Link>
        <div className="ml-auto search-icon-mobile">
          <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
        </div>
        <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-0">
            <Link className="menu-item nav-link" to="/admin">
              Quản lý chung
            </Link>
            <NavDropdown
              className="menu-item"
              title="Danh sách quản lý"
              id="basic-nav-dropdown"
            >
              <Link to="/admin-products" className="dropdown-item">
                Sản phẩm
              </Link>
              <Link to="/admin-comingsoon" className="dropdown-item">
                Sắp phát hành
              </Link>
              <Link to="/categories" className="dropdown-item">
                Ảnh bìa
              </Link>
            </NavDropdown>
            <Link className="menu-item nav-link" to="/news">
              Tin tức
            </Link>
            <Link className="menu-item nav-link" to="/tutorial">
              Hướng dẫn
            </Link>
            <div className="searchAndUsser">
              <Button className="search-icon-desktop">
                <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
              </Button>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="dropdown-avatar">
                  {avatar === "" ? (
                    <FontAwesomeIcon
                      className="icon menu-item user-mobile"
                      icon={faUser}
                    />
                  ) : (
                    <div className="avatar-frame">
                      <img src={UPLOAD_PATH + avatar} alt="avatar" width="20px" />
                    </div>
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-user dropdown-menu-right">
                  <Link to="/admin-profile" className="dropdown-item">Thông tin cá nhân</Link>
                  <Link to="/login" className="dropdown-item">Đăng xuất</Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
