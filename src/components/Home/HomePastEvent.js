import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

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
		centerPadding: '0px',
		customPaging : function(slider, i) {
			
		},
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 3,
				swipeToSlide: true,
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				swipeToSlide: true,
			  }
			},
		  ]
      };
    return (
        <>
            <div className="home_past_event_area oflow-hd">
			<div style={{height: "100px"}} className="divider_height oflow-hd"></div>
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
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								<div className="home_past_event_single floatleft oflow-hd">
									<div className="home_past_event_single_bg oflow-hd">
										<div className="home_past_event_single_img oflow-hd">
											<img src="images/pevent.png" alt="img"/>
										</div>
										<div className="home_past_event_single_details oflow-hd">
											<h3>Dameer & Fuad Presents SANJOY concert</h3>
											<h4>By BDMusic</h4>
										</div>
									</div>
								</div>
								
							</Slider>
						</div>
					</div>
				</div>
			</div>
			<div style={{height: "100px"}} className="divider_height oflow-hd"></div>
		</div>
        </>
    );
};

export default HomePastEvent;