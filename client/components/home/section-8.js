import React, {useEffect, useState} from 'react';
import styles from "../../styles/home/section8.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCar,
    faCopy, faGlobe,
    faHandHoldingUsd,
    faPeopleArrows,
    faTruckLoading, faTruckMoving
} from "@fortawesome/free-solid-svg-icons";
import CargoTruck from "../../public/vectorIcons/cargoTruck"
import axios from "axios";

function Section8(props) {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        axios.get('http://localhost:3000/news/all')
            .then(response => setData(response.data.ddd))
            .catch(e => console.log(e));
    }, []);
    return (

        <div className={styles.wr} id="section-8">
            <div className={styles.wrapper}>
                <div className={styles.mTitle}>
                    <div className={styles.mainTitle}>From Our Blog!</div>
                </div>
                <div className={styles.inGrid}>
                    <div className={styles.grid}>
                        {
                            data !== undefined ?
                            data.map((i,k) => {
                                return(
                                    <div className={styles.gridItem} key={k}>
                                        <div className={styles.gridImg1} style={{backgroundImage:  `url(${i.image})`}}></div>
                                        <div className={styles.gridTitle}>{i.title}</div>
                                        <div className={styles.gridText}>{i.description} ... </div>
                                        <div className={styles.gridBtn}>
                                            <a href="/blogs" className={styles.btnText}>
                                                <div className={styles.readMore}>
                                                    Read More
                                                </div>
                                                <div className={styles.readMoreIcon}>
                                                    <FontAwesomeIcon icon={faArrowRight}/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }):<div>no results</div>
                        }


                    </div>
                </div>
            </div>


        </div>
    );
}

export default Section8;

