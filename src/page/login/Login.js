import StartGameLogo from "../../logo.svg";
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { DOMAIN } from "../../API/api";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTokenExpired } from "../../redux/sliceAdminProfile"
import ModalExpiredToken from "../../components/modal/ModalExpiredToken"
export default function LoginPage() {
  document.title = "Đăng nhập";

  const history = useHistory();

  const tokenExpired = useSelector(selectTokenExpired)

  const [show, setShow] = useState(tokenExpired);
  const handleClose = () => setShow(false);

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errMess, setErrMess] = useState("");

  let account = {
    email: adminEmail,
    password: adminPassword,
  };

  async function login() {
    fetch(DOMAIN + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token",
      },
      body: JSON.stringify(account),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Tài khoản hoặc mật khẩu không đúng");
        }
      })
      .then((data) => {
        if (data.token !== null) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("adminID", data.id )
          localStorage.setItem("avatar", data.avatar)
          history.push("/admin");
        }
      })
      .catch((err) => {
        setErrMess(err.message);
      });
  }
  return (
    <div>
      <Link to="/">
        <div className="container mt-3 mb-3">
          <div className="d-flex">
            <img
              className="logo-login"
              src={StartGameLogo}
              alt="Start Game Logo"
            ></img>
            <div className="logoName d-flex align-items-center ml-2">
              START GAME
            </div>
          </div>
        </div>
      </Link>
      <div className="container login-box">
        <div className="title">Đăng Nhập Tài Khoản</div>
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <div className="d-flex justify-content-between">
              <Form.Label>Email</Form.Label>
              <div className="text-center text-danger">{errMess}</div>
            </div>
            <Form.Control
              type="text"
              onChange={(event) => setAdminEmail(event.target.value)}
              autoFocus
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              onChange={(event) => setAdminPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Ghi nhớ lần sau" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={login}>
            Đăng Nhập
          </Button>
          <div className="login-option">
            <Link to="/">Quên Mật Khẩu</Link>
            <Link to="/">Đăng Ký Ngay</Link>
          </div>
        </Form>

        <div className="login-other">
          <div>Hoặc đăng nhập bằng các tài khoản sau</div>
          <div className="login-socials">
            <FontAwesomeIcon className="fb-icon" icon={faFacebookF} />
            <FontAwesomeIcon className="gg-icon" icon={faGoogle} />
          </div>
        </div>
      </div>
      <div className="container mt-5 d-flex justify-content-center text-bottom">
        <Link to="/">
          <p>Điều khoản dịch vụ</p>
        </Link>
        <p className="symbol mr-5 ml-5"></p>
        <Link to="/">
          <p>Chính sách bảo mật </p>
        </Link>
        <p className="symbol mr-5 ml-5"></p>
        <Link to="/">
          <p>Vấn đề thường gặp </p>
        </Link>
        <p className="symbol mr-5 ml-5"></p>
        <Link to="/">
          <p>Liên Hệ CSKH</p>
        </Link>
      </div>
      <div className="container text-center d-flex justify-content-center mt-4">
        <p className="mb-0 pb-0">
          Made by <span>Huy @ 2021</span>
        </p>
      </div>
      <ModalExpiredToken show={show} handleClose={handleClose} />
    </div>
  );
}
