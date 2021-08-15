import React from 'react';
import styles from "../../styles/home/section1.module.scss";
import {Link} from "react-scroll";

function Card(props) {
    return (
        <div className={styles.wrapper} id="section-1">
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            We deliver real value, more loads on time.
                        </div>
                        <div className={styles.text}>
                            The leading company your can trust.
                        </div>
                        <div className={styles.outerBtn}>
                            <div className={styles.btn}>

                                <a href="/drivers" className={styles.btnText}>
                                    Become a driver
                                </a>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;