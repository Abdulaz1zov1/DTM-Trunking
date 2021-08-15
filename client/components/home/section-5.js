import React from 'react';
import styles from "../../styles/home/section5.module.scss";

function Section5(props) {
    return (
        <div className={styles.wr} id="section-5">
            <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <div className={styles.mTitle}>
                    <div className={styles.boldTitle}> From our Drivers</div>
                </div>
                <div className={styles.inGrid}>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <div className={styles.gridCircle}>
                                <div className={styles.innerCircle1}>❝</div>
                            </div>

                            <div className={styles.gridText}>They're just driver-friendly. Whenever you have a problem or suggestion, they're open-minded and they'll listen to you and try to help you find a solution." </div>
                            <div className={styles.line}></div>
                            <div className={styles.gridTitle}>Mohamed Digale</div>
                            <div className={styles.gridTitle2}>Truck Driver</div>
                        </div>
                        <div className={styles.gridItem}>
                            <div className={styles.gridCircle}>
                                <div className={styles.innerCircle2}>❝</div>
                            </div>

                            <div className={styles.gridText}>"It's a great company and it's growing. I believe that if you want to start somewhere and grow with a company, DTM Trucking would be a great company for you."</div>
                            <div className={styles.line}></div>
                            <div className={styles.gridTitle}>Keith Moore</div>
                            <div className={styles.gridTitle2}>Truck Driver</div>
                        </div>
                        <div className={styles.gridItem}>
                            <div className={styles.gridCircle}>
                                <div className={styles.innerCircle3}>❝</div>
                            </div>

                            <div className={styles.gridText}>"The best part about driving for DTM is the family atmosphere and the way you get treated. It's a good job driving for DTM and I feel like I'm part of the family."</div>
                            <div className={styles.line}></div>
                            <div className={styles.gridTitle}>David Crenshaw</div>
                            <div className={styles.gridTitle2}>Truck Driver</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Section5;