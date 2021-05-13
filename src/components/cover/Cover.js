import "./cover.css";
import Slider from "react-slick";
import { Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getCover, UPLOAD_PATH } from "../../API/api";

export default function Cover() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const [cover, setCover] = useState([]);

  useEffect(() => {
    (async function fecthData() {
      const res = await getCover();
      setCover(res);
    })();
  }, []);

  const sliderContent = cover.map((item) => (
    <div className="slide" key={item.id}>
      <div className="background">
        <img src={UPLOAD_PATH + item.background} alt={item.name}></img>
      </div>
      <div className="gameName">
        <img
          className="mb-4"
          src={UPLOAD_PATH + item.logo}
          alt={item.name + "logo"}
        ></img>
      </div>
      <a href="/news">
        <Button className="btnInfo">{item.price}</Button>
      </a>
      <img
        className="gameDev"
        src={UPLOAD_PATH + item.developers}
        alt={item.name + "dev"}
      ></img>
    </div>
  ));
  console.log("sliderContent : ", cover);

  return (
    <div>
      {cover.length === 0 ? (
        <div className="d-flex justify-content-center m-5 p-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Slider className="container-fluid cover" {...settings}>
          {sliderContent}
        </Slider>
      )}
    </div>
  );
}
