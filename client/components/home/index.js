import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import {useEffect, useRef, useState} from "react";
import styles from "../../styles/Home.module.css"
import {faArrowUp, faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import window from "global/window";
import Sidebar from "./sidebar/sidebar";
import Contact from "../layout/header/contact";
import Section6 from "./section-6";
import Section4 from "./section-4";
import Section5 from "./section-5";
// import Section7 from "./section-7";
import Section8 from "./section-8";
import Section9 from "./section-9";
import Sample from "./sample"
import ContactUs from "./contactUs"

import App from "./carusel/app";

export default function Home() {

    const linkToTop = useRef(null);

    const [bool, setBool] = useState(false);

    function getPageYOffSet() {
        if (window !== undefined) {
            return window.pageYOffset;
        } else {
            return 0;
        }
    }

    const [offTop, setOffTop] = useState(getPageYOffSet());

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (window !== undefined) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    function handleScroll() {
        setOffTop(getPageYOffSet);
    }
    const onScrollToTop = () =>{
        linkToTop.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    return (
        <div>
            <Sidebar bool1={bool}
                     onPress1 = {setBool}
            />
            <a href="top" ref={linkToTop}/>
            <Contact/>
            <Header
                    onPress1 = {setBool}
                    bool1={bool}
            />
            <Section1/>
            <Section2/>

            <Section3/>
            <Section6/>


            <Section5/>
            <Section9/>

            <ContactUs/>
            <Section8/>

            <Footer/>
            <div onClick={onScrollToTop}
                 className={styles.scroll}
                 style={{
                     display: `${offTop > 400 ? "flex" : "none"}`
                 }}
            ><FontAwesomeIcon icon={faArrowUp} className="icon"/>

            </div>
        </div>
    );
}
