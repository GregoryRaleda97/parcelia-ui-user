import React from 'react';
import { NavLink } from 'react-router-dom'
import './home.css';
import Row from '../../components/row/row';
import Banner from '../../asset/img/roma.jpg';
import Banner1 from '../../asset/img/banner1.jpg';
import Coca from '../../asset/img/coca.jpg';
import Parcel from '../../components/parcel/parcel';
import Row1 from '../../components/row/row1';
import Footer from '../../asset/img/footer.jpg';

function Home() {
    return (
        <div>
            <div className="home_rows">
                <div className="rows_Img">
                    <img
                        src="https://www.static-src.com/siva/asset///08_2021/promo_99.gif"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///11_2020/digital-aggr.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///06_2021/gratis_ongkir_widget.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///07_2021/PromoBank96x96pxrevamp.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///01_2021/Blifresh_logo_new2.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///01_2021/HTA_logo_new2.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///01_2021/Blimart_logo_new2.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///03_2021/BBI_logo_widget.png"
                        className="row_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///03_2021/logo-uang-elektronik.png"
                        className="row_Img"
                    />
                </div>
                <div className="home_row">
                    <NavLink to='/' className="text1">Belanja Seru</NavLink>
                    <NavLink to='/' className="text2">Tagihan & Isi Ulang</NavLink>
                    <NavLink to='/' className="text3">Gratis Ongkir</NavLink>
                    <NavLink to='/' className="text4">Promo Parcel</NavLink>
                    <NavLink to='/' className="text5">Blufresh</NavLink>
                    <NavLink to='/' className="text6">Download Aplikasi</NavLink>
                    <NavLink to='/' className="text7">Blumart</NavLink>
                    <NavLink to='/' className="text8">Lokal No. 1</NavLink>
                    <NavLink to='/' className="text9">e-Money</NavLink>
                </div>
            </div>
            <div className="image-banner">
                <img
                    src={Banner}
                    className="banner_row"
                />
                <img
                    src="https://www.static-src.com/merchant/uploads/full/131/1629474939771.jpg"
                    className="banner_row"
                />
                <img
                    src="https://www.blibli.com/friends/assets/2019/11/Oreo-Music-Box-3.jpg"
                    className="banner_row"
                />
            </div>
            <div className="image-banner1">
                <img
                    src="https://blog.klikindomaret.com/wp-content/uploads/2020/05/LAYOUT_product_health-and-wellness-test-OK4-03.jpg"
                    className="banner_row2"
                />
                <img
                    src={Coca}
                    className="banner_row2"
                />
                <img
                    src="https://id-test-11.slatic.net/shop/e472a0c346681ff0a03e2274446bee60.jpeg"
                    className="banner_row2"
                />
            </div>
            <img
                src={Banner1}
                className="banner_row1"
            />
            <Row />
            <div className="Parcel">
                <Parcel />
            </div>
            <img
                src={Footer}
                className="image-footer"
            />
            <div className="row1">
                <Row1 />
            </div>
        </div>
    )
}

export default Home
