import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CardTouch extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    const settings2 = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="card">
          <Slider {...settings}>
            {/* <div>
              <img
                src="./bf.png"
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div> */}
            {/* <div>
              <img
                src="./bf.png"
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div>
            <div>
              <img
                src="./bf.png"
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div>
            <div>
              <img
                src="./bf.png"
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div> */}
            {/* <div>
              <img
                src="https://i.pinimg.com/736x/69/98/0d/69980d37b7a3cdbf02e541b11c33a2c9.jpg"
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/69/98/0d/69980d37b7a3cdbf02e541b11c33a2c9.jpg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div> */}
            <div>
              <img
                src="./client1.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client2.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client3.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client4.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client5.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client6.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
          </Slider>
        </div>
        <div className="card-responsive">
          <Slider {...settings2}>
          <div>
              <img
                src="./client1.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client2.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client3.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client4.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client5.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src="./client6.jpeg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            
          </Slider>
        </div>
      </>
    );
  }
}

export default CardTouch;
