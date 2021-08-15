import React, {useState} from 'react';
import Index from "../components/drivers/index"
import Contact from "../components/layout/header/contact"
import Section2 from "../components/drivers/section-2"
import ContactUs from "../components/home/contactUs"
import Sidebar from "../components/home/sidebar/sidebar";
import Header from "../components/drivers/header";
import Footer from "../components/drivers/footer";

function Drivers(props) {
    const [bool, setBool] = useState(false);


    return (
        <div>
            <Sidebar bool1={bool}
                     onPress1={setBool} />
            <Contact/>
            <Header  bool1={bool}
                     onPress1={setBool}/>
            <Index/>
            <Section2/>
            <ContactUs/>
            <Footer/>

        </div>
    );
}

export default Drivers;