import React from 'react';
import styles from "../../styles/quote/section1.module.scss"

function Section1(props) {
    return (
        <div className={styles.wr}>
            <div className={styles.overlay}>
                <div className={styles.wrapper}>Get a quote</div>
            </div>
        </div>
    );
}

export default Section1;