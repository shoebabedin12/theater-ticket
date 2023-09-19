import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


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
    centerMode: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    // customPaging: function (slider, i) {
    //   return "";
    // },
    customPaging: function(i) {
        return (
          <Link>
            <img src={`/abstract0${i + 1}.jpg`} alt=""/>
          </Link>
        );
      },
  };
  return (
    <>
      <div className="home_hero_area oflow-hd">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home_hero_slider_wrapper">
                <Slider {...settings} className="home_hero_slider_main">
                  <div className="home_hero_single floatleft oflow-hd">
                    <Link to="">
                      <img
                        src={require("./../../assets/images/s1.png")}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="home_hero_single floatleft oflow-hd">
                    <Link to="">
                      <img
                        src={require("./../../assets/images/s1.png")}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="home_hero_single floatleft oflow-hd">
                    <Link to="">
                      <img
                        src={require("./../../assets/images/s1.png")}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="home_hero_single floatleft oflow-hd">
                    <Link to="">
                      <img
                        src={require("./../../assets/images/s1.png")}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="home_hero_single floatleft oflow-hd">
                    <Link to="">
                      <img
                        src={require("./../../assets/images/s1.png")}
                        alt="img"
                      />
                    </Link>
                  </div>
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
