import React, {Fragment, useCallback, useEffect, useState} from 'react';
import ProgressBar from "./progress"
import axios from 'axios';
import styles from "../../styles/quote/section2.module.scss";
import {useDropzone} from "react-dropzone";
import validator from "validator";
import DragIcon from "../../public/vectorIcons/dragIcon";
import NumberFormat from "react-number-format";





const Section2 = () => {

    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(null);
    const [message1, setMessage1] = useState('');
    const [company, setCompany] = useState('');
    const [mc, setMc] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [delivery, setDelivery] = useState('')
    const [date, setDate] = useState('')

    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    const onSubmit = async e => {
        e.preventDefault();
        let bool = name === ""
            || phone === ""
            || email === ""
            || company === ""
            || mc === ""
            || message1 === ""
            || from === ""
            || to === ""
            || date === ""
            || delivery === "";

        if ( bool ) {
            alert("Fill all the needed forms")
        }
        else {
            const data = {
                name: name,
                phone: phone,
                email: email,
                company: company,
                mc: mc,
                message1: message1,
                from: from,
                to: to,
                date: date,
                delivery: delivery
            };
            console.log(data)
            // await axios.post("http://localhost:3000/quote", data)
            //     .then(response => {
            //         console.log("Status: ", response.status);
            //         console.log("Data: ", response.data);
            //         onUploadProgress: progressEvent => {
            //             setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
            //             setTimeout(() => setUploadPercentage(0), 10000);
            //         }
            //     }).catch(error => {
            //     console.error('Something went wrong!', error);
            // });
            const res = await axios.post('http://localhost:3000/quote', data, {
                headers: {
                    'Content-Type': 'multipart/form-data boundary=${form._boundary}'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            })
        }
    }
    return (
        <div  id="drivers-2">
            <form onSubmit={onSubmit}>
                <div className={styles.wr}>
                    <div className={styles.wrapper}>
                        <div className={styles.cu}>
                            <div className={styles.mTitle}>
                                Get a quote
                            </div>
                        </div>
                        <div className={styles.innerTitle}>Personal Data</div>

                        <div className={styles.column}>

                            <div className={styles.left}>
                                <div className={styles.inputs}>
                                    <div className={styles.input}>
                                        <input
                                            placeholder="Full Name"
                                            type="text"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setName(event.target.value)
                                            }}
                                            value={name}
                                        />
                                    </div>
                                    <div className={styles.input}>
                                        <NumberFormat
                                            className={styles.input1}
                                            format="+1 ### ### ## ##"
                                            mask="_"
                                            placeholder={"Phone"}
                                            onChange={event => setPhone(event.target.value)}
                                            value={phone}
                                        />
                                    </div>
                                    <div className={styles.input}>
                                        <input type="text" id="userEmail"
                                               onChange={(e) => {
                                                   validateEmail(e);
                                                   setEmail(e.target.value)
                                               }}
                                               className={styles.input1}
                                               placeholder={"Email"}
                                               value={email}
                                        />
                                        <span style={{
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}>{emailError}</span>
                                    </div>
                                    <div className={styles.input}>
                                        <input
                                            placeholder="Company name"
                                            type="input"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setCompany(event.target.value)
                                            }}
                                            value={company}
                                        />
                                    </div>
                                    <div className={styles.input}>
                                        <input
                                            placeholder="MC#"
                                            type="input"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setMc(event.target.value)
                                            }}
                                            value={mc}
                                        />
                                    </div>



                                </div>
                                <div className={styles.textarea}>
                                <textarea
                                    draggable="false"
                                    placeholder="References"
                                    type="text"
                                    required=""
                                    rows="4"
                                    className={styles.input5}
                                    onChange={event => {
                                        setMessage1(event.target.value)
                                    }}
                                    value={message1}
                                />

                                </div>
                                <div className={styles.innerTitle2}>Personal Data</div>

                                <div className={styles.inputs}>
                                    <div className={styles.input}>
                                        <input
                                            placeholder="From"
                                            type="text"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setFrom(event.target.value)
                                            }}
                                            value={from}
                                        />
                                    </div>
                                    <div className={styles.input}>
                                        <input
                                            placeholder="To"
                                            type="text"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setTo(event.target.value)
                                            }}
                                            value={to}
                                        />
                                    </div>
                                    <div className={styles.input}>
                                        <input
                                            type="date"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setDate(event.target.value)
                                            }}
                                            value={date}
                                        />
                                    </div>


                                    <div className={styles.input}>
                                        <input
                                            placeholder="Delivery date"
                                            type="input"
                                            required=""
                                            className={styles.input1}
                                            onChange={event => {
                                                setDelivery(event.target.value)
                                            }}
                                            value={delivery}
                                        />
                                    </div>



                                </div>

                                <div className="mb30">
                                    <ProgressBar percentage={uploadPercentage} className="progressbar"/>
                                </div>
                                <div className={styles.inUploads}>
                                    <div className={styles.button}>
                                        <input
                                            type="submit"
                                            value="Send"
                                            className={styles.btn}
                                        />
                                    </div>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Section2;
