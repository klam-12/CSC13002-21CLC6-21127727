import React, { useState, useEffect } from 'react';

import './footer.css';

import mail from '../../assets/icons/2xmail.svg';
import locate from '../../assets/icons/2xlocate.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
// import copyright from '../../../../image/copyright.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="divide-container">
                    <div className="symbol-footer">

                        <h3 className="title-project">Travelus</h3>

                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="lien-he">
                        <h2 className=" title-foter">Liên hệ</h2>
                        <ul className="info">
                            <li className="each-info">
                                <img className="  img-dc " src={locate} />
                                <p className="address-text" style={{margin: '0px'}}>227 Nguyễn Văn Cừ, phường 4, quận 5, TP Hồ Chí Minh</p>
                            </li>

                            <li className="each-info">
                                <img className="img-mail " src={mail} />
                                <p className="mail-text">travelus2023@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="Co-Re">
                        <div className="Company">
                            <h2 className="title-foter">Công ty</h2>
                            <ul className="co-list">
                                <li className="co-li">Về chúng tôi</li>
                                <li className="co-li">Tất cả tours</li>
                                <li className="co-li">Vacation Packages</li>
                                <li className="co-li">Feedbacks</li>
                            </ul>
                        </div>
                        <div className="Resource">
                            <h2 className="title-foter">Tài nguyên</h2>
                            <ul className="co-list">
                                <li className="co-li">Dự án</li>
                                <li className="co-li">Chính sách bảo mật</li>
                                <li className="co-li">Quy định</li>
                            </ul>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="bottom-line">
                        <p className="alright-text">© Allright reserve 2023</p>
                        <img className=" img-fb " alt="" src={facebook} style={{float: 'right'}}/>
                        <img className=" img-ig" alt=" " src={instagram} style={{float: 'right'}}/>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
