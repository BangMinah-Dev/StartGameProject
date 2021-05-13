import "./comingsoon.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getComingSoon, UPLOAD_PATH } from "../../API/api";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function ComingSoon() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const res = await getComingSoon();
      setProduct(res);
    })();
  }, []);

  const slideItem = product.map((item) => (
    <div key={item.id} className="slide-item">
      <img src={UPLOAD_PATH + item.image} alt={item.name}></img>
      <div className="content">
        <div className="gameName">
          <Link to="/">{item.name}</Link>
        </div>
        <div className="gamePrice">
          <Link to="/">$ {item.price}</Link>
        </div>
        <div className="gameDes">
          <Link to="/">{item.description}</Link>
        </div>
        <div className="gamePlatform mt-2 mb-2">
          {item.platform.map((plat) => (
            <button className="btn" key={plat.value}>
              {plat.value}
            </button>
          ))}
        </div>
        <div className="gameOrder">
          <button className="btn">Đăng ký</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <h3 className="mt-4">Sắp phát hành</h3>
      {product.length === 0 ? (
        <div className="d-flex justify-content-center m-5 p-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Slider className="poster" {...settings}>
          {slideItem}
        </Slider>
      )}
    </div>
  );
}
