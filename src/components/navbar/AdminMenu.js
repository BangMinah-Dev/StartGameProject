import "./admin.css";
import StartGameLogo from "../../logo.svg";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { selectAvatar } from "../../redux/sliceAdminProfile";
import { useSelector } from "react-redux";
export default function AdminMenu() {
  const avatar = useSelector(selectAvatar);

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
              <Link to="/categories" className="dropdown-item">
                Ảnh bìa
              </Link>
              <Link to="/categories" className="dropdown-item">
                Sắp phát hành
              </Link>
            </NavDropdown>
            <Link className="menu-item nav-link" to="/news">
              Tin tức
            </Link>
            <Link className="menu-item nav-link" to="/tutorial">
              Hướng dẫn
            </Link>
            <div className="d-flex justify-content-start">
              <Button className="search-icon-desktop">
                <FontAwesomeIcon className="icon menu-item" icon={faSearch} />
              </Button>
              <Link to="/login" className="nav-link">
                {avatar === "" ? (
                  <FontAwesomeIcon
                    className="icon menu-item user-mobile"
                    icon={faUser}
                  />
                ) : (
                  <div className="avatar-frame">
                    <img
              
                      src={avatar}
                      alt="avatar"
                      width="20px"
                    />
                  </div>
                )}
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
