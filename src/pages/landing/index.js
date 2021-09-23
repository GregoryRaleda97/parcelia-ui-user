import React from 'react';
import CarouselComp from '../../components/carousel';
import SwiperComp from '../../components/swiper/index'
import Home from '../home/home';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <CarouselComp />
                <Home />
                <SwiperComp />
            </div>
        );
    }
}

export default LandingPage;