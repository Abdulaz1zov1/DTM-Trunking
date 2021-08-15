import React, {useEffect, useState} from 'react';
import AdminPanel from "../components/admin/adminPanel";
import Contact from "../components/layout/header/contact";
import Header from "../components/drivers/header";
import {connect} from "react-redux";
import {authentication} from "../redux/reducers/auth";
import {useRouter} from "next/router";
import Sidebar from "../components/home/sidebar/sidebar";

function LoginoAndpasswordotrueAuthentication({access}) {
    const [bool, setBool] = useState(false);

    const router = useRouter()

    useEffect(() => {
        console.log(access)

        if( !access){
            router.push("/admin")
        }
    }, [access])
    return (
        <div>
            <Sidebar bool1={bool}
                     onPress1={setBool} />
            <Contact/>
            <Header bool1={bool}
                    onPress1={setBool}/>
            <AdminPanel/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    access: state.auth.access,
});

export default connect(
    mapStateToProps,
    {authentication}
)(LoginoAndpasswordotrueAuthentication);