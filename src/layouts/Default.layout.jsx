import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import Options from "../components/Navbar/options";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";


const DefaultLayout = (props) => {
    return (
    <>
       <Navbar/>
       <Options/>
       <HeroCarousal/>
       {props.children}
    </>
    );
};

export default DefaultLayout;