import React from 'react';
import styles from "../../../styles/carusel/card.module.scss";

import Card from "./card";
import Carousel from "react-elastic-carousel"
import data from "../list"


export default function App(props) {
    const breakPoints = [
        {width: 200, itemsToShow: 1},
        {width: 400, itemsToShow: 2},
        {width: 700, itemsToShow: 3}
    ]

    return (
        <div className={styles.App}>
            <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
                {data.map(item =>
                    <div key={item.id} className={styles.card}>
                        <div>
                            {item.title}
                        </div>
                        <div>
                            {item.id}
                        </div>
                        <div>
                            {item.icon}
                        </div>
                    </div>
                )}
            </Carousel>

            <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
                {data.map(item =>
                    <div key={item.id} className={styles.card}>
                        <Image
                            className={styles.land}
                            alt={"picture"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"center"}
                            src={`/home/${item.img}.jpg`}
                        >
                        </Image>
                    </div>
                )}
            </Carousel>

        </div>
    );
}

