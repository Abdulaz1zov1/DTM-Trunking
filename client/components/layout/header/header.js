import styles from "../../../styles/header/header.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"
import {useState, useRef, useEffect} from "react";


export default function Header({onPress1, bool1}) {
    const ref= useRef(null);
    const [isScroll, setIsScroll] = useState(false);
    const stylesMain = {
        display: `${bool1 ? "block" : "none"}`,
        position: "fixed",
        top: "0px",
        height: "100vh",
        width: "100%",
        zIndex: "100",
        background: "rgba(0,0,0,0.5)"
    }
    const [link,setLink] = useState('home');

    function handleScroll(e){

   if(ref.current){
       if(ref.current.getBoundingClientRect().top < 0){
           setIsScroll(true)
       }else{
           setIsScroll(false)
       }
   }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return ()=>window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <div ref={ref}>
            <div style={stylesMain} onClick={() => onPress1(!bool1)}/>
            <div className={[styles.wr, isScroll ? styles.top:''].join(' ')}>
                <div className={styles.tog}>
                    <div className={styles.bars} onClick={() => onPress1(!bool1)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </div>
                <div className={styles.wrapper}>


                    <Link activeClass="active"
                          to="section-1"
                          spy={true}
                          smooth={true}
                          className={`${styles.link} ${link === 'home' ? styles.another : ""}`}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('home')}
                          ignoreCancelEvents={false}

                    >
                        <div className={[styles.brand, isScroll ? styles.newBrand:''].join(' ')}>
                        </div>
                    </Link>

                    <div className={styles.links}>
                        <Link activeClass="active"
                              to="section-1"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'home' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('home')}
                              ignoreCancelEvents={false}

                        >
                       <div className={[styles.link, isScroll ? styles.top: ''].join(' ')}>  HOME</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-2"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'services' ? styles.another : ""}`}
                              offset={240}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('about')}
                              ignoreCancelEvents={false}

                        >
                        <div className={[styles.link, isScroll ? styles.top: ""].join(' ')}>ABOUT US</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-3"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'services' ? styles.another : ""}`}
                              offset={-40}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('services')}
                              ignoreCancelEvents={false}

                        >
                        <div className={[styles.link, isScroll ? styles.top:""].join(' ')}>SERVICES</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-6"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'whyDtm' ? styles.another : ""}`}
                              offset={-80}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('whyDtm')}
                              ignoreCancelEvents={false}

                        >
                        <div className={[styles.link, isScroll ? styles.top:''].join(' ')}>WHY DTM?</div>
                        </Link>
                        <a href="/drivers"  className={`${styles.link} ${link === 'forDrivers' ? styles.another : ""}`}>
                               <div className={[styles.link, isScroll ? styles.top:''].join(' ')}>FOR DRIVERS</div>
                        </a>
                        <Link activeClass="active"
                              to="section-7"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'Team' ? styles.another : ""}`}
                              offset={-150}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('Team')}
                              ignoreCancelEvents={false}
                              id="asosiyLink"
                        >
                            <div className={[styles.link, isScroll ? styles.top:''].join(' ')}>CONTACT</div>
                        </Link>
                        <Link activeClass="active"
                              to="section-8"
                              spy={true}
                              smooth={true}
                              className={`${styles.link} ${link === 'Contact' ? styles.another : ""}`}
                              offset={0}
                              duration={500}
                              delay={100}
                              isDynamic={true}
                              onSetActive={() => setLink('Contact')}
                              ignoreCancelEvents={false}
                        >
                            <div className={[styles.link, isScroll ? styles.top:''].join(' ')}>BLOG</div>
                        </Link>
                        <a href="/quote"  className={`${styles.link} ${link === 'Team' ? styles.another : ""}`}>
                            <div className={[styles.link8, isScroll ? styles.top:''].join(' ')}>GET A QUOTE</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
