import '../styles/globals.css'
import '../styles/general.scss'
import React, {useState, useEffect} from 'react';
import {css} from "styled-components";
import Head from "next/head";
import {useMediaQuery} from 'react-responsive';
import { PuffLoader } from "react-spinners";
import 'antd/dist/antd.css';
import { useStore } from '../store'
import {connect, Provider} from 'react-redux'
import {authentication} from "../redux/reducers/auth";

function MyApp({Component, pageProps,authentication,access}) {
    const [bool, setBool] = useState("1200")
    const query1 = useMediaQuery({query: '(max-width: 990px)'});
    const query2 = useMediaQuery({query: '(max-width: 600px)'});
    useEffect(() => {
        if (query1){
            setBool("990")
        }
        if (query2){
            setBool("600")
        }
    })
    const style = {
        size: bool === "600" ? 50 : bool === "990" ? 100 : 100
    }
    const override = css`
  display: block;
  margin: 300px auto;
  border-color: black;
  }
`;
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);
    const store = useStore(pageProps.initialReduxState)

    return (

        spinner ? <div className="center">
                <PuffLoader color={"red"} loading={true} css={override} size={style.size}/></div> :
            <>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                        crossOrigin="anonymous"
                    />

                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                          crossOrigin="anonymous"></link>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                        crossOrigin="anonymous"
                    />
                    <title>DTM.com</title>
                    <link rel="shortcut icon" href="/white.png" />
                </Head>
                <Provider store={store}>
                     <Component {...pageProps}/>
                </Provider>
            </>
    )
}

export default MyApp
