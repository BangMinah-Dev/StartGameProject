import StartGameLogo from "../../logo.svg";
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { checkLogin } from "../../API/api";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  document.title = "LOGIN";

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errMess, setErrMess] = useState("");

  const history = useHistory();
  // console.log(adminEmail);
  // console.log(adminPassword);


  async function login() {
    try {
      const res = await checkLogin(adminEmail, adminPassword);
      if (res.status === 200) {
        history.push("/admin");
      }
    } catch (err) {
      setErrMess(err.response.data.message);
    }
  }
  return (
    <div>
      <a href="/">
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
      </a>
      <div className="container login-box">
        <div className="title">Đăng Nhập Tài Khoản</div>
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <span className="ml-5 text-danger">{errMess}</span>
            <Form.Control
              type="text"
              onChange={(event) => setAdminEmail(event.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
        </Form>
        <div className="login-option">
          <a href="/">Quên Mật Khẩu</a>
          <a href="/">Đăng Ký Ngay</a>
        </div>
        <div className="login-other">
          <div>Hoặc đăng nhập bằng các tài khoản sau</div>
          <div className="login-socials">
            <FontAwesomeIcon className="fb-icon" icon={faFacebookF} />
            <FontAwesomeIcon className="gg-icon" icon={faGoogle} />
          </div>
        </div>
      </div>
      <div className="container mt-5 d-flex justify-content-center text-bottom">
        <a href="/">
          <p>Điều khoản dịch vụ</p>
        </a>
        <p className="symbol mr-5 ml-5"></p>
        <a href="/">
          <p>Chính sách bảo mật </p>
        </a>
        <p className="symbol mr-5 ml-5"></p>
        <a href="/">
          <p>Vấn đề thường gặp </p>
        </a>
        <p className="symbol mr-5 ml-5"></p>
        <a href="/">
          <p>Liên Hệ CSKH</p>
        </a>
      </div>
      <div className="container text-center d-flex justify-content-center mt-4">
        <p className="mb-0 pb-0">
          Made by <span>Huy @ 2021</span>
        </p>
      </div>
    </div>
  );
}
