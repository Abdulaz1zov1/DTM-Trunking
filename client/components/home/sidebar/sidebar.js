import styles from "../../../styles/sidebar/sidebar.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDesktop,
    faHome, faObjectGroup,
    faPeopleCarry, faPhone,
    faProjectDiagram,
    faServer,
    faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "react-scroll";

function Sidebar({bool1,onPress1}) {
    const style1 = {
        left:`${bool1 ? "0px": "-100%"}`,
        transition: '1s',

    }
    const Func1 = () => onPress1(!bool1)

    const Func2 = () => {
        onPress1(!bool1)
    }
    const Func3 = () => {
        onPress1(!bool1)
    }
    const Func4 = () => {
        onPress1(!bool1)
    }
    const Func5 = () => {
        onPress1(!bool1)
    }
    const Func6 = () => {
        onPress1(!bool1)
    }
    const Func7 = () => {
        onPress1(!bool1)
    }
    const [link,setLink] = useState('home')


    return (
        <div className={styles.container} style={style1}>
            <div className={styles.left} style={style1}>
                <div className={styles.brand}></div>
                <div className={styles.links}>

                <div className={styles.link}>
                    <Link activeClass="active" onClick={() => Func1()}
                          to="section-1"
                          spy={true}
                          smooth={true}
                          className={styles.inner}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}

                    >
                        Home
                    </Link>

                </div>
                <div className={styles.link} >
                    <Link activeClass="active"
                          onClick={() => Func2()}
                          to="section-2"
                          spy={true}
                          smooth={true}
                          className={styles.inner}
                          offset={1000}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('services')}
                          ignoreCancelEvents={false}
                    >
                        About us
                    </Link>
                </div>
                <div className={styles.link} >
                    <Link activeClass="active"
                          onClick={() => Func3()}
                          to="section-3"
                          spy={true}
                          smooth={true}
                          className={styles.inner}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('projects')}
                          ignoreCancelEvents={false}
                    >
                        Services
                    </Link>
                </div>
                <div className={styles.link} >
                    <Link activeClass="active"
                          to="section-6"
                          onClick={() => Func4()}
                          spy={true}
                          smooth={true}
                          className={styles.inner}
                          offset={-80}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('technologies')}
                          ignoreCancelEvents={false}
                    >
                        Why DTM?
                    </Link>

                </div>
                    <div className={styles.link}>
                        <a href="/drivers"  className={styles.inner}>
                            For drivers
                        </a>
                    </div>
                <div className={styles.link} >
                    <Link activeClass="active"
                          onClick={() => Func6()}
                          to="section-7"
                          spy={true}
                          smooth={true}
                          className={styles.inner}
                          offset={-200}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('team')}
                          ignoreCancelEvents={false}
                    >
                        Contact
                    </Link>
                </div>
                <div className={styles.link} >
                    {/*<FontAwesomeIcon icon={faPhone}/>*/}
                    <Link activeClass="active"
                          to="section-8"
                          onClick={() => Func7()}
                          spy={true}
                          smooth={true}
                          className={styles.inner}
                          offset={0}
                          duration={500}
                          delay={100}
                          isDynamic={true}
                          onSetActive={() => setLink('contact')}
                          ignoreCancelEvents={false}
                    >
                        Blog
                    </Link>


                </div>
                <div className={styles.link}>
                    <a href="/quote"  className={styles.inner}>
                        Get a quote
                    </a>
                </div>
            </div>
            </div>
            {/*<div className={styles.right} style={style1}></div>*/}

        </div>
    );
}

export default Sidebar;