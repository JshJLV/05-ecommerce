import Slider from "react-slick";
import CardSmall from "../Cards/CardSmall";
import { products } from "../../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderProducts(props) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 m-auto mt-4">
      <div>
        <p className="p-4 text-2xl xl:text-4xl">{props.categoria}</p>
      </div>
      <Slider {...settings} className="p-4">
        {products.map((item, index) => {
          return <CardSmall item={item} key={index} />;
        })}
      </Slider>
    </div>
  );
}

export default SliderProducts;
