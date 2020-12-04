import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Arrow 
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//CSS 
// import "./Carousel.css"

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <ArrowForwardIosIcon />,
      // prevArrow: <ArrowBackIosIcon />
    };
    return (
     
      <div>
          <div id="carouselExampleIndicators" className="carousel slide my-1" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={4} />
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src="../../img/banner1.jpg" className="img-fluid" alt="../../img/banner1.jpg" />
                  </div>
                  <div className="carousel-item">
                      <img src="../../img/banner2.jpg" className="img-fluid" alt="../../img/banner2.jpg" />
                  </div>
                  <div className="carousel-item">
                      <img src="../../img/banner5jpg.jpg" className="img-fluid" alt="../../img/banner5jpg.jpg" />
                  </div>
                  <div className="carousel-item">
                      <img src="../../img/banner3.jpg" className="img-fluid"  alt="../../img/banner3.jpg" />
                  </div>
                  <div className="carousel-item">
                      <img src="../../img/banner5.jpg" className="img-fluid" alt="../../img/banner5.jpg" />
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
    );
  }
}
