import React, { useEffect, useState } from "react";
import Logo from "./assets/Logo.png";
import Avatar from "./assets/avatar.png";
import "./Navbar.scss";

const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
      
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 
    

    return (
        <>
            <div className={`navbar ${show && "nav_black"}`}>

                <img className="nav_logo" src={Logo} alt="Netflix logo" />

                <img className="nav_avatar" src={Avatar} alt="Netflix Avatar" />

            </div>
        </>
    );

}
export default Navbar;