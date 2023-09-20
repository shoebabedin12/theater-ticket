import React from "react";
import Slider from "react-slick";
import HomePastEventData from "../../assets/data/HomePastEventData";

const HomePastEvent = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 15000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerPadding: "0px",
    customPaging: function (slider, i) {},
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="home_past_event_area oflow-hd">
        <div
          style={{ height: "100px" }}
          className="divider_height oflow-hd"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_title oflow-hd">
                <h2>Past Events</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="home_past_event_wrapper">
                <Slider {...settings} className="home_past_event_main">
                  {HomePastEventData.map((item) => (
                    <div
                      key={item.id}
                      className="home_past_event_single floatleft oflow-hd"
                    >
                      <div className="home_past_event_single_bg oflow-hd">
                        <div className="home_past_event_single_img oflow-hd">
                          <img
                            src={require(`./../../assets/images/${item.img}`)}
                            alt="img"
                          />
                        </div>
                        <div className="home_past_event_single_details oflow-hd">
                          <h3>{item.title}</h3>
                          <h4>By {item.organized_by}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "100px" }}
          className="divider_height oflow-hd"
        ></div>
      </div>
    </>
  );
};

export default HomePastEvent;
