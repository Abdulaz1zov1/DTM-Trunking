import React from 'react';
import styles from "../../styles/home/section6.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image"
import {
    faArrowRight,
    faCar, faClock,
    faCopy, faGlobe,
    faHandHoldingUsd,
    faPeopleArrows, faRunning, faShieldAlt,
    faTruckLoading, faTruckMoving, faUsers
} from "@fortawesome/free-solid-svg-icons";
import CargoTruck from "../../public/vectorIcons/cargoTruck"
import data from "./list"

function Section6(props) {
    return (
        <div className={styles.wr} id="section-6">
            <div className={styles.wrapper}>
                <div className={styles.partTwo}>
                    <div className={styles.inPartTwo}>
                        <div className={styles.partTwoTitle}>WHY DTM TRUCKING INC?</div>
                        <div className={styles.grid}>
                            <div className={styles.gridItem}>
                                <div className={styles.inDisplay}>
                                    <div className={styles.partTwoImg}>
                                        <div className={styles.inPartTwoImg}>
                                            <FontAwesomeIcon icon={faClock}/>
                                        </div>
                                    </div>
                                    <div className={styles.rightPartTwo}>
                                        <div className={styles.rightPartTwoTitle}>
                                            OPERATIONS
                                        </div>
                                        <div className={styles.rightPartTwoText}>
                                            We provide 24/7 support for our clients and drivers along with real time location service for all loads.  Transparent dispatching with rate confirmations on every load – we have nothing to hide, Owner Operator gets paid percentage from full gross pay
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.inDisplay}>
                                    <div className={styles.partTwoImg}>
                                        <div className={styles.inPartTwoImg}>
                                            <FontAwesomeIcon icon={faShieldAlt}/>
                                        </div>
                                    </div>
                                    <div className={styles.rightPartTwo}>
                                        <div className={styles.rightPartTwoTitle}>
                                            SAFETY
                                        </div>
                                        <div className={styles.rightPartTwoText}>
                                            Full safety team: compliance tracking, paperwork reviews and preparations, on the road support. Ticket and violation removal support. DOT violation challenges by experienced staff. Usage of company’s IFTA stickers and legal reporting.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.inDisplay}>
                                    <div className={styles.partTwoImg}>
                                        <div className={styles.inPartTwoImg}>
                                            <FontAwesomeIcon icon={faRunning}/>
                                        </div>
                                    </div>
                                    <div className={styles.rightPartTwo}>
                                        <div className={styles.rightPartTwoTitle}>
                                            MAINTENANCE
                                        </div>
                                        <div className={styles.rightPartTwoText}>
                                            With our maintenance support team drivers can be sure that all equipment is on time maintained and any breakdown can be solved without delay. Our outstanding  communication always leave our clients satisfied with on time delivery.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.inDisplay}>
                                    <div className={styles.partTwoImg}>
                                        <div className={styles.inPartTwoImg}>
                                            <FontAwesomeIcon icon={faUsers}/>
                                        </div>
                                    </div>
                                    <div className={styles.rightPartTwo}>
                                        <div className={styles.rightPartTwoTitle}>
                                            WE TREAT OUR EMPLOYEES AS FAMILY
                                        </div>
                                        <div className={styles.rightPartTwoText}>
                                            We keep our business as clear as possible, that's why we share Rate Confirmations with our Owner Operators!

                                            No forced dispatch.

                                            No touch freight.

                                            Owner/Ops get 88% pay from GROSS.

                                            All our dispatchers speak Russian as well.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.btnPartTwo}>
                            <div className={styles.inPartTwoBtn}>
                                <a href="/quote" className={styles.btnText}>
                                    Apply
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section6;