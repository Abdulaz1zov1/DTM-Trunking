import React, {useState} from 'react';
import Sidebar from "../components/home/sidebar/sidebar";
import Header from "../components/blogs/header";
import Contact from "../components/layout/header/contact"
import Section1 from "../components/blogs/section-1";

function Blogs(props) {
    const [bool, setBool] = useState(false);

    return (
        <div>
            <Sidebar bool1={bool}
                     onPress1={setBool}/>
            <Contact />
            <Header bool1={bool}
                    onPress1={setBool}/>
            <Section1/>

        </div>
    );
}

export default Blogs;