import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerText.css';

function HeaderText() {
    return (
        <div className="header_bottom">
            <div className="header_bottomLinks">
                <NavLink to='/'>9.9 DEALS</NavLink>
                <NavLink to='/'>Promo Parcel</NavLink>
                <NavLink to='/'>Gebyar Promo</NavLink>
                <NavLink to='/'>Dapatkan Promo di Blu.com</NavLink>
                <NavLink to='/'>Tips Sehat Saat Pandemi Covid-19</NavLink>
            </div>
        </div>
    )
}

export default HeaderText;
