import styles from "../../styles/home/section3.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faCheckCircle, faGlobe, faHandHoldingUsd, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import App from './carusel/app'
import data from "./listSection3"
import Carousel from "react-elastic-carousel";


export default function Section3() {

    const breakPoints = [
        {width: 350, itemsToShow: 1},
        {width: 450, itemsToShow: 2},
        {width: 700, itemsToShow: 3}
    ]
  return (
    <div className={styles.wr} id="section-3">
        <div className={styles.wrapper}>
            <div className={styles.overlay}>
                <div className={styles.innerOverlay}>
                    <div className={styles.inDisplay}>
                    <div className={styles.left}>
                        <div className={styles.grayTitle}>THE LEADING FRIGHT COMPANY</div>
                        <div className={styles.leftTitle}>Provide 100% customer and
                             <span> driver satisfaction.</span> </div>
                        <div className={styles.leftText}> We understand customers value service, transparency, and results. By building a strong team of knowledgeable individuals that are passionate about moving your freight we are able to foster relationships with our established carrier base.</div>

                    </div>
                        <div className={styles.right}>
                                <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false} className={styles.carusel}>
                                    {data.map(item =>
                                        <div key={item.id} className={styles.caruselItem}>
                                            <div className={styles.caruselIcon}>
                                                {item.icon}
                                            </div>
                                            <div className={styles.caruselTitle}>
                                                {item.title}
                                            </div>
                                            <div className={styles.caruselText}>
                                                {item.text}
                                            </div>
                                        </div>
                                    )}
                                </Carousel>
                        </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
