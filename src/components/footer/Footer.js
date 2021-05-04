import StartGameLogo from "../../logo.svg";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebookF, faTwitter, faPinterestP } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="d-flex flex-column justify-content-center align-items-center pt-5">
        <a href="/">
          <img
            className="logo-footer"
            src={StartGameLogo}
            alt="logo Start Game"
          ></img>
        </a>
        <a href="/">
          <h3>START GAME</h3>
        </a>
      </div>
      <div className="footerMenu">
        <div className="mainMenu mb-5 mt-5">
          <a href="/">TRANG CHỦ</a>
          <a href="/">VỀ CHÚNG TÔI </a>
          <a href="/">TIN TỨC </a>
          <a href="/">DỊCH VỤ</a>
        </div>
        <div className="socials mb-5">
          <a href="/">
            <FontAwesomeIcon className="socials-icon" icon={faFacebookF} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="socials-icon" icon={faPinterestP} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="socials-icon" icon={faTwitter} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="socials-icon" icon={faYoutube} />
          </a>
        </div>
        <div className="line"> </div>
        <div className="designBy d-flex justify-content-center">
          <p>
            Made by <span>Huy </span>@ 2021
          </p>
        </div>
      </div>
    </div>
  );
}
