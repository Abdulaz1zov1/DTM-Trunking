import React, {useEffect, useState} from 'react';
import styles from "../../styles/blogs/section1.module.scss"
import axios from "axios";

function Section1(props) {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get('http://localhost:3000/news/all')
            .then(response => setData(response.data.ddd))
            .catch(e => console.log(e));
    }, [])
    return (
        <div className={styles.wr}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperIn}>
                    {
                        data !== undefined ?
                        data.map((i, k) => {
                            return(
                                <div className={styles.display}>
                                    <div className={styles.title}>{i.title}</div>
                                    <div className={styles.img}>
                                        <div className={styles.cover}></div>
                                    </div>
                                    <div className={styles.text}>{i.description}</div>
                                </div>
                            )
                        }):<div>Backed crashed</div>
                    }
                  

                </div>
            </div>
        </div>
    );

}


export default Section1;