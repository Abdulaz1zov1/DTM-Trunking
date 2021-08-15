import React, {Fragment, useCallback, useEffect, useState} from 'react';
import ProgressBar from "./progress"
import axios from 'axios';
import styles from "../../styles/drivers/section2.module.scss";
import validator from "validator";
import NumberFormat from "react-number-format";





const Section2 = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [filename1, setFilename1] = useState('');
    const [file1, setFile1] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(null);
    const [message1, setMessage1] = useState('');
    const [company, setCompany] = useState('');

    const onChange = (e,id)  => {
        if (e.target.files !== undefined && id === 1){
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
        if (e.target.files !== undefined && id === 2){
            setFile1(e.target.files[0]);
            setFilename1(e.target.files[0].name);
        }


    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append("file1", file1);
        formData.append('name', name);
        formData.append('email', email)
        formData.append('message', message1)
        formData.append('company', company)
        formData.append('phone', phone)

        try {
            const res = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data boundary=${form._boundary}'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            })

            const {fileName, filePath} = res.data;
            setUploadedFile({fileName, filePath});
            setMessage('File uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
        setFile('');
        setCompany('');
        setEmail('');
        setFilename('');
        setMessage1('');
        setEmailError('');
        setPhone('');
        setName('');
        setFilename1('');
        setFile1('')
    }


    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles !== undefined) {
            setFile(acceptedFiles[0])
            setFilename(acceptedFiles[0].name)
        }
    }, [])
    useEffect(() => {

    },[uploadPercentage])
    const inputStyle = {
        visibility: "hidden",
        borderWidth: "2px",
        borderColor: "black",
        border: "dotted",
        width: "100%",
        height: "150px"
    }
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    function handleChange(event) {
        setFilename(event.target.files[0].name)
    }
    function handleChange(event) {
        setFilename1(event.target.files[0].name)
    }
    return (
        <div  id="drivers-2">
            <form onSubmit={onSubmit}>
                <div className={styles.wr}>
                    <div className={styles.wrapper}>
                        <div className={styles.cu}>
                            <div className={styles.mTitle}>
                                Become a driver
                            </div>
                            <div className={styles.line}></div>
                        </div>
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
                                        <input
                                            placeholder="Experience (years)"
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
                                        <NumberFormat
                                            className={styles.input1}
                                            format="+1 ### ### ## ##"
                                            mask="_"
                                            placeholder={"Phone"}
                                            onChange={event => setPhone(event.target.value)}
                                            value={phone}
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
                                <div className="mb30">
                                    <ProgressBar percentage={uploadPercentage} className="progressbar"/>
                                </div>
                                <div className={styles.inUploads}>
                                    <div className={styles.uploads}>

                                        <div className={styles.attachCv}>
                                            <label className="custom-file-upload">
                                                <input type="file"  onChange={event => onChange(event,1 )}/>
                                                Attach CV/CDL
                                            </label>
                                            <div>
                                                {filename}
                                            </div>
                                        </div>
                                        <div className={styles.attachCv} style={{margin: "20px"}}>
                                            <label className="custom-file-upload">
                                                <input type="file"  onChange={event => onChange(event, 2)} />
                                                Attach MedCard
                                            </label>
                                            <div>
                                                {filename1}
                                            </div>
                                        </div>
                                    </div>
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
