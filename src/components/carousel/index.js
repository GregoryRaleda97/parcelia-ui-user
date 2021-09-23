import React from 'react';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../asset/img/1-a.jpg';
import Banner2 from '../../asset/img/1-b.jpg';
import Banner3 from '../../asset/img/1-c.jpg';
import Banner4 from '../../asset/img/1-d.jpg';
import Banner5 from '../../asset/img/1-e.jpg';

function CarouselComp() {
    return (
            <div className="carousel-Slide">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src={Banner1}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src={Banner2}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src={Banner3}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src={Banner4}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src={Banner5}
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default CarouselComp;
