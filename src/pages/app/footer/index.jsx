import React, { Component } from 'react';
import './index.scss';
import UDL from '../../../common/locales/zh-cn.js';
import website from '../../../images/website.jpg';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
            <nav className="nav-box">
                <ul className="footer-nav container">
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
            </nav>
            <div className="content-box">
                <div className="content container">
                    <div className="left-content">
                        <p className="title">
                            {UDL.labels.websiteTitle}
                        </p>
                        <ul className="company-information">
                            <li className="content">
                                {UDL.pages.app.footer.copyright}
                            </li>
                            <li className="content">
                                {UDL.pages.app.footer.telephone}
                            </li>
                            <li className="content">
                                {UDL.pages.app.footer.mobilePhone}
                            </li>
                            <li className="content">
                                {UDL.pages.app.footer.recordNumber}
                            </li>
                            <li className="content">
                                {UDL.pages.app.footer.websiteUrl}
                            </li>
                        </ul>
                    </div>
                    <img src={website} alt="" className="right-content"/>
                </div>
            </div>
      </footer>
    );
  }
}

export default Footer;
