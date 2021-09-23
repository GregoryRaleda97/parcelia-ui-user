import React from 'react';
import './row.css';
import Unilever from '../../asset/img/unilever.jpg'
import Glico from '../../asset/img/glico.jpg'
import Abc from '../../asset/img/abc.jpg';

function row() {
    return (
        <div className="row-cards">
            <div class="card">
                <img
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//84/MTA-11430901/br-m036969-04691_glico-pocky-cookies-cream-40-gram-biskuit-stik-wjm-shop_full01.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <img
                        src={Glico}
                        className="cards-Img"
                    />
                </div>
            </div>

            <div class="card">
                <img
                    src="https://cf.shopee.co.id/file/a23d68e39101edf37d37317c438daf2f"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <img
                        src={Unilever}
                        className="cards-Img"
                    />
                </div>
            </div>

            <div class="card">
                <img
                    src="https://scontent.fbdo6-1.fna.fbcdn.net/v/t1.6435-9/74417324_3670594266304751_2820968360397940587_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=l6myrm893f8AX8kHS_y&_nc_ht=scontent.fbdo6-1.fna&oh=361d79165017196f8ad99f3ee4ca22d4&oe=6159EF99"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <img
                        src={Abc}
                        className="cards-Img"
                    />
                </div>
            </div>

            <div class="card">
                <img
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-6764258/mayora_paket-ngemil-dirumah_full01.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesyqemeYM1-LGPmQhQXV48iQ3f5MPH0hkc6GkWM6x3ei9RSbu2gbPOLr5PX2KIsIUuXA&usqp=CAU"
                        className="cards-Img"
                    />
                </div>
            </div>

            <div class="card">
                <img
                    src="https://katalogpromosi.com/wp-content/uploads/2021/07/blibli-snack.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <img
                        src="https://e-recruitmen.com/wp-content/uploads/2020/11/Indofood-Logo-Thumb.jpg"
                        className="cards-Img"
                    />
                </div>
            </div>

            <div class="card">
                <img
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//92/MTA-9603343/wingsfood_isoplus_isotonik_drink_350_ml_x_12botol_1_pak__full00.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <img
                        src="https://kampungdesigner.com/wp-content/uploads/edd/2020/06/Logo-Wings-Food-by-kampungdesigner.jpg"
                        className="cards-Img"
                    />
                </div>
            </div>
        </div>
    )
}

export default row
