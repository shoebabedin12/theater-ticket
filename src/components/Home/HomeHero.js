import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeHeroData from "../../assets/data/HomeHeroData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const HomeHero = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerPadding: "140px",
    
  };
  return (
    <>
      <div className="home_hero_area oflow-hd">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="home_hero_slider_wrapper">
                <Slider {...settings} className="home_hero_slider_main">
                  {HomeHeroData.map((item) => (
                    <div
                      key={item.id}
                      className="home_hero_single floatleft oflow-hd"
                    >
                      <Link to="">
                        <img
                          src={require(`./../../assets/images/${item.img}`)}
                          alt="img"
                        />
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
