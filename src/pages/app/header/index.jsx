import React, { Component } from 'react';
import './index.scss';
import UDL from '../../../common/locales/zh-cn.js';
import logo from '../../../images/logo.png';


class Header extends Component {
  render() {
    return (
      <div className="app-header">
            <div className="top">
                <div className="container top-content">
                    <p className="top-title">
                        {UDL.pages.app.header.topTitle}
                    </p>
                    <p className="sales-call">
                        <span className="call-title">
                            {UDL.pages.app.header.phoneTitle}
                            {UDL.labels.colon}
                        </span>
                        <span className="call-value">
                            {UDL.pages.app.header.phone}
                        </span>
                    </p>
                </div>
            </div>
            <nav className="nav-box">
                <div className="container nav-content">
                    <img src={logo} alt=""/>
                    <ul className="top-nav">
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.home}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.companyProfile}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.productCenter}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.newsInformation}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.videoCollection}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.serviceCenter}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.onlineConsultation}
                            </span>
                        </li>
                        <li className="nav">
                            <span className="nav-text">
                                {UDL.labels.contactUs}
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
      </div>
    );
  }
}

export default Header;
