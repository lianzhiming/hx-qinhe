import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import swiper1 from '../../../images/swiper1.jpg';
import swiper2 from '../../../images/swiper2.jpg';
import swiper3 from '../../../images/swiper3.png';
import './index.scss';
import UDL from '../../../common/locales/zh-cn.js';

class Center extends Component {
  render() {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    };
    return (
      <div className="app-center">
            <Swiper {...params}>
                <div>
                    <img src={swiper1} alt="" className="swiper-img"/>
                </div>
                <div>
                    <img src={swiper2} alt="" className="swiper-img"/>
                </div>
                <div>
                    <img src={swiper3} alt="" className="swiper-img"/>
                </div>
            </Swiper>
      </div>
    );
  }
}

export default Center;
