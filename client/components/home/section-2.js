import React from 'react';
import styles from "../../styles/home/section2.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faCar, faCheckCircle, faCopy, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import CargoTruck from "../../public/vectorIcons/cargoTruck";
import CallCenter from "../../public/vectorIcons/callCenter";
import Badge from "../../public/vectorIcons/badge";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
function Section2(props) {
    return (
        <div className={styles.wrapper} id="section-2">
          <div className={styles.partOne}>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <div className={styles.innerIcon}>
                    <CargoTruck/>
                </div>
                <div className={styles.innerTitle}>48 States Mainland</div>
                <div className={styles.innerText}>We run all over the US, coast to coast, north to south over dedicated lane.</div>
              </div>
                <div className={styles.gridItem}>
                    <div className={styles.innerIcon}>
                      <CallCenter/>
                    </div>
                    <div className={styles.innerTitle}>24/7 Service</div>
                    <div className={styles.innerText}>24/7 Multilingual Dispatch Service is only one phone call away.</div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.innerIcon}>
                        <Badge/>
                    </div>
                    <div className={styles.innerTitle}>Reliability</div>
                    <div className={styles.innerText}>As truckers ourselves, we know how important it is to get paid on time.</div>
                </div>
            </div>
          </div>
            <div className={styles.animation}></div>
            <div className={styles.animation}></div>
          <div className={styles.partTwo}>
              <div className={styles.inDisplay}>
                  <div className={styles.left}>
                      <div className={styles.box1}>
                          <div className={styles.cover1}></div>
                      </div>
                      <div className={styles.box2}>
                          <div className={styles.cover2}></div>
                      </div>
                      <div className={styles.box3}>
                          <div className={styles.cover3}>
                              <div className={styles.boxTitle}>
                                  <CountUp end={12} prefix="Over " suffix="K+" redraw={true} duration={2} className="count">
                                      {({countUpRef, start}) => (
                                          <VisibilitySensor onChange={start} delayedCall>
                                              <span ref={countUpRef}/>
                                          </VisibilitySensor>
                                      )}
                                  </CountUp>




                              </div>
                              <div className={styles.boxText}>Completed shipments</div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.right}>
                      <div className={styles.innerRight}>
                          <div className={styles.grayTitle}></div>
                          <div className={styles.rightTitle}> Our Commitment to Drivers</div>
                          <div className={styles.rightText1}>We recognize the daily sacrifices of the men and women working tirelessly to provide for both our families and theirs. Our team is committed to providing easier loads, opportunity, tools and professional dispatch services.</div>
                          <div className={styles.rightText2}>
                              We will assist our drivers to plan their day from a trip planner with GPS navigation, to parking, weather and more...
                          </div>
                          <div className={styles.checkboxTexts}>
                              <div className={styles.inDisplayCheck}>
                                  <div className={styles.checkIcon}>
                                      <FontAwesomeIcon icon={faCheckCircle}/>
                                  </div>
                                  <div className={styles.checkText}>
                                      Driver NO touch loads
                                  </div>
                              </div>
                              <div className={styles.inDisplayCheck}>
                                  <div className={styles.checkIcon}>
                                      <FontAwesomeIcon icon={faCheckCircle}/>
                                  </div>
                                  <div className={styles.checkText}>
                                      Drop and Hook loads
                                  </div>
                              </div>
                              <div className={styles.inDisplayCheck}>
                                  <div className={styles.checkIcon}>
                                      <FontAwesomeIcon icon={faCheckCircle}/>
                                  </div>
                                  <div className={styles.checkText}>
                                      Newer trucks 2018 and up
                                  </div>
                              </div>
                          </div>
                          {/*<div className={styles.btn}>*/}
                          {/*   <div className={styles.btnDisplay}>*/}
                          {/*       <div className={styles.btnText}>Discover More</div>*/}
                          {/*       <div className={styles.btnIcon}>*/}
                          {/*           <FontAwesomeIcon icon={faArrowRight}/>*/}
                          {/*       </div>*/}
                          {/*   </div>*/}
                          {/*</div>*/}
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Section2;