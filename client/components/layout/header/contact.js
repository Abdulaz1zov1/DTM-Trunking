import React from 'react';
import styles from "../../../styles/header/contact.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationArrow, faPhone} from "@fortawesome/free-solid-svg-icons";
import Facebookteamdefult1 from "../../../public/vectorIcons/facebookteamdefult1";
import Twittertamdefult1 from "../../../public/vectorIcons/twittertamdefult1";
import Instagramteamdefult1 from "../../../public/vectorIcons/instagramteamdefult1";


function Contact(props) {
    const sendMail = () => {
        window.location.href = "mailto:info@dtmtrucking.com?subject=exportation";
    }
    const faceBook = () => {
        window.open("http://facebook.com")
    }
    const instaGram = () => {
        window.open('http://instagram.com')
    }
    const twitTer = () => {
        window.open("http://twitter.com")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.inLeft}>
                <div className={styles.adress}>
                    <div className={styles.contactIcon}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className={styles.text}>

                        <div className={styles.email}
                             onClick={sendMail}
                        >
                            info@dtmtrucking.com
                        </div>
                    </div>
                </div>
                <div className={styles.adress}>
                    <div className={styles.contactIcon}>
                       <FontAwesomeIcon icon={faLocationArrow}/>
                    </div>
                    <div className={styles.text}>
                        1275, Davis Rd, Chicago, Illinois
                    </div>
                </div>
                <div className={styles.adress}>
                    <div className={styles.contactIcon}>
                       <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <div className={styles.text}>
                        <a className={styles.phoneNumber} href="tel:+17733092111">+1 773 309 21 11</a>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.inRight}>
                    <div className={styles.rightIcon} onClick={faceBook}>
                        <Facebookteamdefult1/>
                    </div>
                    <div className={styles.rightIcon} onClick={twitTer}>
                        <Twittertamdefult1/>
                    </div>
                    <div className={styles.rightIcon} onClick={instaGram}>
                        <Instagramteamdefult1/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;