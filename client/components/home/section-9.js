import styles from "../../styles/home/section9.module.scss";
import Image from "next/image";
import data from "./list"
import Carousel from "react-elastic-carousel"




export default function Section9() {
    const img1 = {
        width: "100%",
        backgroundImage: `url('./section9.jpg')`,
        height: "130vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        paddingTop: "1px",
        marginTop: "-1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }
    const breakPoints = [
        {width: 200, itemsToShow: 1},
        {width: 400, itemsToShow: 2},
        {width: 700, itemsToShow: 3},
        {width: 900, itemsToShow: 4}
    ]
    return (
        <div className={styles.wr} id="section-3">
            <div className={styles.overlay}>
            <div className={styles.projects}>
                <div className={styles.mTitle}>
                    <span>Our</span> Partners
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.wrapper}>
                <Carousel
                    breakPoints={breakPoints}
                    itemPadding={[20, 20]}
                    pagination={false}
                    showArrows={false}

                >

                                <div className={styles.rowItem2}></div>
                                <div className={styles.rowItem3}></div>
                                <div className={styles.rowItem4}></div>
                                <div className={styles.rowItem5}></div>
                                <div className={styles.rowItem6}></div>
                                <div className={styles.rowItem7}></div>
                                <div className={styles.rowItem8}></div>
                </Carousel>
            </div>
        </div>
        </div>
    );
}
