import React from 'react';
import styles from "../../../styles/footer/footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationArrow, faSms} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

function Footer(props) {
    const sendMail = () => {
        window.location.href = "mailto:nfo@dtmtrucking.com?subject=Car exportation";
    }
    const instaGram = () => {
        window.open("https://www.instagram.com")
    }
    const faceBook = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://www.facebook.com");

    }
    const twitTer = () => {
        // window.location.href = "https://youtu.be/CRtB7DZJqHk";
        window.open("https://www.twitter.com");

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.cont}>
                <div className={styles.row}>
                    <div className={styles.logo}>

                    </div>
                    <div className={styles.text}>
                        We are a leading company in logistics that delivers real value.
                    </div>
                    <div>
                        <div className={styles.center}>
                            <div className={styles.in} onClick={faceBook}>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                     className={styles.img1}>
                                    <g transform="scale(0.35)">
                                        <path d="M37.2,64H28c-2.5,0-4.5-2-4.5-4.5V37H17c-2.5,0-4.5-2-4.5-4.5v-6.9c0-2.5,2-4.6,4.5-4.6h6.5v-5.5c0-9.1,6.2-15.5,15-15.5
	 	H47c1.4,0,2.5,1.1,2.5,2.5v13c0,1.4-1.1,2.5-2.5,2.5h-5.5v3h5.4c0,0,0.1,0,0.1,0c1.4,0.1,2.7,0.7,3.5,1.8c0.8,1.1,1.2,2.4,0.9,3.8
		l-1.3,6.7C49.8,35.4,48,37,45.7,37h-4.3v22.5C41.5,62,39.5,64,37.2,64z M28.5,59h8V34.5c0-1.4,1.1-2.5,2.5-2.5h6.3l1.2-6H39
		c-1.4,0-2.5-1.1-2.5-2.5v-8c0-1.4,1.1-2.5,2.5-2.5h5.5V5h-6c-6.1,0-10,4.1-10,10.5v8c0,1.4-1.1,2.5-2.5,2.5h-8.5v6H26
		c1.4,0,2.5,1.1,2.5,2.5V59z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={styles.in} onClick={instaGram}>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                     className={styles.img1}>
                                    <g transform="scale(0.35)">
                                        <path d="M32,16.9c-8.3,0-15,6.8-15,15.1c0,8.3,6.7,15.1,15,15.1c8.3,0,15-6.8,15-15.1C47,23.7,40.3,16.9,32,16.9z M32,42.1
		c-5.5,0-10-4.5-10-10.1s4.5-10.1,10-10.1c5.5,0,10,4.5,10,10.1S37.5,42.1,32,42.1z"/>
                                        <path d="M47,10c-2.8,0-5,2.3-5,5s2.2,5,5,5c2.8,0,5-2.3,5-5S49.8,10,47,10z"/>
                                        <path d="M48,0H16C7.2,0,0,7.2,0,16v31.7C0,56.7,7.3,64,16.3,64h31.5C56.7,64,64,56.7,64,47.7V16C64,7.2,56.8,0,48,0z M59,47.7
		C59,53.9,54,59,47.8,59H16.3C10.1,59,5,54,5,47.8V16C5,9.9,9.9,5,16,5H48c6.1,0,11,4.9,11,11V47.7z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={styles.in} onClick={twitTer}>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                     className={styles.img1}>
                                    <g transform="scale(0.35)">
                                        <path d="M22.2,58c-5.4,0-13.3-1-20-5.8c-2-1.4-2.8-4.1-1.8-6.4c0.9-2.3,3.4-3.6,5.9-3.1l0,0c0,0,1,0.2,2.5,0.1
		c-1-1.4-1.9-3-2.5-4.7c-0.2-0.6-0.3-1.1-0.3-1.7c-2.5-2.9-3.8-6.5-3.8-10.5c0-0.9,0.2-1.8,0.7-2.5C2,20,1.7,15.5,4.6,10.7
		C5.5,9.3,7,8.3,8.7,8.1c0.1,0,0.1,0,0.2,0c1.8-0.1,3.4,0.6,4.5,1.8l0,0c0.7,0.7,6.1,6.4,13,8.3C28,11.2,34.4,6,42.1,6
		c3.4,0,6.7,1,9.3,2.9c0.7-0.2,1.6-0.5,2.4-1.1c1.6-1.1,3.7-1.3,5.4-0.4c1.7,0.8,2.9,2.4,3.1,4.3c0,0.1,0,0.2,0,0.3
		c0,0.1,0,0.3,0,0.6c1.4,1.4,1.9,3.4,1.3,5.2c-0.5,1.7-2.1,3.8-5.4,6.8C58,32,54.5,51.8,29.6,57.4C29.4,57.4,26.4,58,22.2,58z
		 M5.4,47.6c-0.2,0-0.3,0.1-0.3,0.1c0,0,0,0.1,0,0.1C5,47.9,5,48,5.1,48.1c5.6,4.1,12.4,4.9,17.1,4.9c3.7,0,6.3-0.5,6.4-0.5
		c22.6-5.1,24.8-23.6,24.9-29.2c0-0.7,0.3-1.4,0.8-1.8c4.2-3.7,4.7-5,4.7-5.1c0.1-0.2-0.1-0.4-0.2-0.4c0,0-0.1-0.1-0.1-0.1
		c-1.1-0.5-1.7-1.8-1.3-3c0.1-0.3,0.1-0.5,0.1-0.7c0-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.4,0.1
		c-2.2,1.5-4.5,2-5.6,2.1c-0.7,0.1-1.3-0.1-1.8-0.5c-1.9-1.6-4.5-2.4-7.1-2.4c-6.1,0-11,4.5-11.2,10.4c0,0.7-0.3,1.4-0.9,1.8
		c-0.5,0.5-1.2,0.7-1.9,0.6c-9.5-1.3-17-8.9-18.5-10.4c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.3,0.2-0.4,0.3
		c-1.8,3-2,6.2-0.7,9.4c0.4,1,0.2,2.2-0.7,2.9c-0.1,0.1-0.2,0.2-0.2,0.2c0,3.2,1,5.8,3.2,7.8c0.7,0.7,0.9,1.6,0.7,2.5
		c0,0.1,0,0.2,0,0.3c0.8,2.5,2.4,4.5,4.6,5.8c0.8,0.5,1.3,1.4,1.2,2.4c-0.1,1-0.8,1.8-1.7,2.1c-4.6,1.5-9.5,0.8-9.7,0.7
		C5.5,47.6,5.4,47.6,5.4,47.6z M58.5,15.7C58.5,15.7,58.5,15.7,58.5,15.7C58.5,15.7,58.5,15.7,58.5,15.7z"/>
                                    </g>
                                    <path className="st0" d="M-5.7,0.9L-5.7,0.9L-5.7,0.9z"/>
                                    <path className="st0" d="M32,32L32,32L32,32z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.title}>
                        Important Links
                    </div>
                    <div className={styles.wr}>
                        <Link
                              to="section-1"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              ignoreCancelEvents={false}
                              className={styles.link}

                        >
                            <div className={styles.links}> <span>-</span>  Home</div>
                        </Link>


                        <Link activeClass="active"
                              to="section-2"
                              spy={true}
                              smooth={true}
                              offset={235}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              ignoreCancelEvents={false}
                              className={styles.link}

                        >
                            <div className={styles.links}> <span>-</span>  About us</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-3"
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              ignoreCancelEvents={false}
                              className={styles.link}

                        >
                            <div className={styles.links}> <span>-</span>  Services</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-6"
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              ignoreCancelEvents={false}
                              className={styles.link}

                        >
                            <div className={styles.links}> <span>-</span>  Why DTM</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-8"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              ignoreCancelEvents={false}
                              className={styles.link}

                        >
                            <div className={styles.links}> <span>-</span>  Blog</div>
                        </Link>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.title}>
                        Our Offices
                    </div>
                    <div className={styles.wr}>
                        <div className={styles.link}>
                            Chicago, IL
                        </div>
                        <div className={styles.link}>
                            Philadelphia, PA
                        </div>
                        <div className={styles.link}>
                            Edison, NJ
                        </div>
                        <div className={styles.link}>
                           <span>Telephone:</span> <a className={styles.phoneNumber} href="tel:+17733092111">+1 773 309 2111</a>
                        </div>
                        <div className={styles.link}>
                            <div className={styles.email}
                                 onClick={sendMail}
                            >
                              <span>Email:</span>  info@dtmtrucking.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowFour}>

                    </div>
                </div>
            </div>
            <div className={styles.abs}>
                Copyright © 2021 DTM Trucking Inc. All rights reserved
            </div>
        </div>
    );
}

export default Footer;