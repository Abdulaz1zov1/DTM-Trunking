import {React, useEffect, useState} from 'react';
import styles from "../../styles/admin/signIn.module.scss"
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {useRouter} from "next/router";
import {authentication} from "../../redux/reducers/auth";
import {connect} from 'react-redux';

function SignIn({access, authentication}) {

    const [values, setValues] =useState({})

    const router = useRouter()

    const handleChange=e=>{
        setValues(prevV=>({...prevV,[e.target.name]:e.target.value}))
    }

    useEffect(() => {
        console.log(access)

    }, [access])

    const handleSubmit=async()=>{
       try{
           const response = await axios({
               method:'POST',
               data:values,
               url:'http://localhost:3000/api/login'
           });
           if(response.status >=200 && response.status<300){
               router.push("/loginoAndpasswordotrueAuthentication")
               authentication(true)
               console.log(access)
           }
       }catch(e){
           console.log(e.response)
           alert("Your username or password incorrect")
       }
    }

    return (
        <div className={styles.App}>
            <div className={styles.login}>
                <input onChange={handleChange}  type="text" name="email" placeholder="Input Login" className={styles.inputLogin}/>
            </div>
            <div className={styles.parol}>
                <input  onChange={handleChange} type="password" name={"password"} placeholder="Input Password" className={styles.inputPassword}/>
            </div>
            <div onClick={handleSubmit} className={styles.btn}>
                Sign In
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    access: state.auth.access,
});

export default connect(
    mapStateToProps,
    {authentication}
)(SignIn);