import React, {useState} from 'react';
import Section1 from "./section-1";
import Section2 from "./section-2";
import ContactUs from "../home/contactUs";
import Footer from "../layout/footer/footer";
import Contact from "../layout/header/contact";
import Sidebar from "../home/sidebar/sidebar";
import Header from "../drivers/header";


function Quote(props) {
    const [bool, setBool] = useState(false)
    return (
        <div>
            <Sidebar bool1={bool}
                     onPress1={setBool}
                     />
            <Contact/>
            <Header bool1={bool}
                    onPress1={setBool}/>
            <Section1/>
            <Section2/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default Quote;