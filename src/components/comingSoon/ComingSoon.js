import "./comingsoon.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getComingSoon, UPLOAD_PATH} from "../../API/api"

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

  const [product, setProduct] = useState([])

  useEffect(()=>{
    (async function fetchData(){
      const res = await getComingSoon()
      setProduct(res)
    })()
  },[])

  const slideItem = product.map((item) => (
    <a key={item.id} className="slide-item" href="/">
      <img
        src={UPLOAD_PATH + item.image}
        alt={item.name}
      ></img>
      <div className="content">
        <div className="gameName">{item.name}</div>
        <div className="gamePrice">$ {item.price}</div>
        <div className="gameDes">{item.description}</div>
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
    </a>
  ));
  return (
    <div className="container">
      <h3 className="mt-4">Sắp phát hành</h3>
      <Slider className="poster" {...settings}>
        {slideItem}
      </Slider>
    </div>
  );
}
