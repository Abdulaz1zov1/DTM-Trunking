import React from 'react';
import VisibilitySensor from "react-visibility-sensor"
import styles from "../../styles/home/sensor.module.scss"

function Sample(props) {
    return (
        <VisibilitySensor>
            {({isVisible}) =>
                <div className={`${styles.link} ${isVisible ? styles.another : ""}`} style={{ transform: isVisible ? "translateX(400px)" : "translateX(100px)"}}>I am {isVisible ? 'visible' : 'invisible'}</div>
            }
        </VisibilitySensor>
    );
}

export default Sample;