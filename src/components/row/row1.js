import React from 'react';
import './row1.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import FooterImg from '../../asset/img/footerimg.jpg';
import FooterImg1 from '../../asset/img/footerimg1.jpg';
import FooterImg2 from '../../asset/img/footerimg2.jpg';

function Row1() {
    return (
        <div className="carouselParcel-row">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="parcel-row"
                        src={FooterImg}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="parcel-row"
                        src={FooterImg1}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="parcel-row"
                        src={FooterImg2}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Row1;
