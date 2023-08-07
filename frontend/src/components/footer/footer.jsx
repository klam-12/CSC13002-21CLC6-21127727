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
                        <h2 className=" title-foter">Contact</h2>
                        <ul className="info">
                            <li className="each-info">
                                <img className="  img-dc " src={locate} />

                                <p className="address-text">227 Nguyen Van Cu, District 5, Ho Chi Minh City</p>
                            </li>

                            <li className="each-info">
                                <img className=" img-mail " src={mail} />

                                <p className="mail-text">travelus2023@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="Co-Re">
                        <div className="Company">
                            <h2 className="title-foter">Company</h2>
                            <ul className="co-list">
                                <li className="co-li">AboutUs</li>
                                <li className="co-li">Vacation Packages</li>
                                <li className="co-li">Feedbacks</li>
                            </ul>
                        </div>
                        <div className="Resource">
                            <h2 className="title-foter">Resources</h2>
                            <ul className="co-list">
                                <li className="co-li">Projects</li>
                                <li className="co-li">Privacy</li>
                                <li className="co-li">Term of use</li>
                            </ul>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="bottom-line">
                        <p className="alright-text">© Allright reserve 2023</p>
                        <img className=" img-fb " alt="" src={facebook} />
                        <img className=" img-ig" alt=" " src={instagram} />
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
