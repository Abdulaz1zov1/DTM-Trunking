import React, {useEffect, useState} from 'react';
import styles from "../../styles/admin/adminPanel.module.scss"
import {imageConfigDefault} from "next/dist/next-server/server/image-config";
import axios from "axios";
import FileBase from 'react-file-base64';
import { Form } from 'react-bootstrap';
import {useRouter} from "next/router";



function AdminLogin({access}) {
    const [file1, setFile1] = useState('');
    const [filename1, setFilename1] = useState('');
    const [file2, setFile2] = useState('');
    const [filename2, setFilename2] = useState('');
    const [file3, setFile3] = useState('');
    const [filename3, setFilename3] = useState('');
    const [data, setData] = useState(undefined);
    const [item, setItem] = useState(
        {
            title: "",
            image: "",
            description: ""
        }
    );
    const [id, setId] = useState(0)

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:3000/news/all')
            .then(response => setData(response.data))
            .catch(e => console.log(e));
    }, []);

    console.log(data);

    const onChange = (e, id) => {
        if (id === 1) {
            if (e.target.files !== undefined) {
                setFile1(e.target.files[0]);
                setFilename1(e.target.files[0].name);
            }
        }
        if (id === 2) {
            if (e.target.files !== undefined) {
                setFile2(e.target.files[0]);
                setFilename2(e.target.files[0].name);
            }
        }
        if (id === 3) {
            if (e.target.files !== undefined) {
                setFile3(e.target.files[0]);
                setFilename3(e.target.files[0].name);
            }
        }

    };


   const [a,setA] = useState(0);
    useEffect(() => {
        if (data !==undefined){
            setId(data.ddd[a]._id);
        }
    }, [data, a])
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .put(`http://localhost:3000/news/${id}`,item);
    }


    return (
        <div className={styles.wrapper}>

            <div className={styles.sideBar}>
                <div className={styles.mainTitle}>
                    Welcome back to admin panel
                </div>
            <div className={styles.buttons}>
                <div className={styles.btnTitle}>
                    Choose which blog you want to update
                </div>
                <div className={styles.display}>
                    <button className={styles.btn} onClick={ () => setA(0)}>1</button>
                    <button className={styles.btn} onClick={ () => setA(1)}>2</button>
                    <button className={styles.btn} onClick={ () => setA(2)}>3</button>
                </div>


            </div>
            <form action="" onSubmit={handleSubmit} className={styles.wr}>
                <div className={styles.inputs}>


                    <div className={styles.title}>
                        <input type="text" onChange={event => setItem({...item, title: event.target.value})}
                               placeholder="Input title"/>
                    </div>
                    <div className={styles.text}>
                        <textarea rows="10" cols="50" type="textarea" draggable="true" placeholder="Input article "
                               onChange={event => setItem({...item, description: event.target.value})}/>
                    </div>
                    <div className={styles.img}>
                        <div className={styles.attachCv}>
                            <label className="custom-file-upload">
                                <FileBase type="file" multiple={false} accept="image/png, image/gif, image/jpeg"
                                          onDone={({base64}) => setItem({...item, image: base64})}/>
                                UPLOAD A PHOTO
                            </label>
                            <div>
                                {filename1}
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.submit}>

                    <input className={styles.done} type="submit"/>
                </div>


            </form>
            </div>
        </div>
    );
}

export default AdminLogin;