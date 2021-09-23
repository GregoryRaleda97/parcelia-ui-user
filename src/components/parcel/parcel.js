import React from 'react';
import './parcel.css';
import { Link } from 'react-router-dom';
import Image from '../../asset/img/snackimage.jpg';

function Parcel() {
    return (
        <div>
            <div className="parcel-rows">
                <div className="parcel-banner-first">

                    <div className="parcel-first">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/parcel'>
                                    Parcel
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-second">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parcel
