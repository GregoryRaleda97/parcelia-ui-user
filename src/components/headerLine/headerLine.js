import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerLine.css'
import HP from '../../asset/img/hp.png';
import Headset from '../../asset/img/headset.svg';

function Header() {
    return (
        <div className="header">
            <div className="header_links">
                <img
                    className='header_Img'
                    src={HP}
                />
                <NavLink to='/'>Download Aplikasi</NavLink>
                <img
                    className='header_Img'
                    src={Headset}
                />
                <NavLink to='/'>Bantuan 24/7</NavLink>
            </div>
            <div className="header_right">
                <NavLink to='/'>Jual di Blu.com</NavLink>
                <NavLink to='/'>Rewards</NavLink>
                <NavLink to='/'>Cek daftar pesanan</NavLink>
            </div>
        </div>
    )
}

export default Header;
