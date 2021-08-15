import React from 'react';
import styles from "../../styles/home/section4.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCar,
    faCopy, faGlobe,
    faHandHoldingUsd,
    faPeopleArrows,
    faTruckLoading, faTruckMoving
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Section4(props) {
    return (
        <div className={styles.wr} id="section-4">
            <div className={styles.partTwo}>
                <div className={styles.mTitle}>
                    <div className={styles.boldTitle}>Why DTM Trucking INC?</div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.gridItem}>
                        <div className={styles.innerIcon}>
                            <FontAwesomeIcon icon={faHandHoldingUsd}/>
                        </div>
                        <div className={styles.innerTitle}>
                            <CountUp end={350} suffix="$" redraw={true} duration={4}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div className={styles.innerText}>Safety Bonus</div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.innerIcon}>
                            <FontAwesomeIcon icon={faTruckMoving}></FontAwesomeIcon>
                        </div>
                        <div className={styles.innerTitle}>
                            <CountUp end={264} suffix="+" redraw={true} duration={3.8}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div className={styles.innerText}>Trucks</div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.innerIcon}>
                            <FontAwesomeIcon icon={faPeopleArrows}/>
                        </div>
                        <div className={styles.innerTitle}>
                            <CountUp end={185} suffix="+" redraw={true} duration={3.4}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div className={styles.innerText}>Drivers</div>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.innerIcon}>
                            <FontAwesomeIcon icon={faGlobe}/>
                        </div>
                        <div className={styles.innerTitle}>
                            <CountUp end={40} suffix="+" redraw={true} duration={2.6}>
                                {({countUpRef, start}) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div className={styles.innerText}>Countries</div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Section4;