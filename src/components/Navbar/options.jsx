import { Link } from 'react-router-dom';
import { BiCameraMovie } from "react-icons/bi";
import { SiGoogleplay } from "react-icons/si";
import React from "react";


const NavSm = () => {
    return (
        <>
            <div className="text-gray-200 text-sm flex items-center cursor-pointer hover:text-white">
                <Link to="/movie/123" ><BiCameraMovie /> Movies </Link>
            </div>
        </>
    );
};
const NavMd = () => {
    return (

        <div className="flex items-center w-1/2 gap-2 text-gray-200 text-sm flex items-center cursor-pointer hover:text-white cursor-pointer hover:text-white w-full px-5 py-2">
            <Link to="/movie/123" ><BiCameraMovie />Movies </Link>
        </div>



    );
};


const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex justify-between gap-80">

                <span className="text-gray-200 text-sm cursor-pointer hover:text-white">
                    <Link to='/movie/123'><button><BiCameraMovie />Movies</button></Link>
                </span>


                <span className="text-gray-200 text-sm cursor-pointer hover:text-white">
                    <Link to='/plays'><SiGoogleplay /><button>Live Play's</button></Link>
                </span>

            </div>
        </>
    );
};

const Options = () => {
    return (
        <>
            <nav className="bg-bms-900 p-2">
                <div className="md:hidden">
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    <NavMd />
                </div>
                <div className="hidden w-full lg:flex">
                    <NavLg />
                </div>
            </nav>
        </>

    );
};

export default Options;