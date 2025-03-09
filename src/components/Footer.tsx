import React from "react";

import "../styles/Footer.css";

import FranceFlag from "../assets/icons/fr.svg";

import { Link } from 'react-router-dom';
import { PROJECT_NAME } from "../config";
import FooterIcon from "./common/FooterIcon";


const Footer: React.FunctionComponent = () => {

    return (
        <>
            <div className="flex bottom-separator top-separator my-4 px-10 py-10 justify-evenly">
                    <div className="flex flex-col gap-1">

                        <h1 className="text-3xl font-extrabold">{PROJECT_NAME}</h1>

                        <div className="flex flex-col gap-1 font-extralight my-1">
                            <Link to="/terms">Terms & conditions</Link>
                            <Link to="/policy">Privacy policy</Link>
                        </div>

                    </div>

                        <div className="flex gap-14 ml-5 mr-5">

                            <div className="flex flex-col gap-4 font-light font-lg">
                                <Link to="/faucet">The faucet</Link>
                                <Link to="/lottery">The lottery</Link>
                                <Link to="/test">Our games</Link>
                            </div>

                            <div className="flex flex-col gap-4 font-light font-lg">
                                <Link to="/news">Faucet news</Link>
                                <Link to="/account">My account</Link>
                                <Link to="/support">Support</Link>
                            </div>

                        </div>

                        <div className="flex gap-5 flex-col">

                            <h2 className="flex justify-center font-md mx-5 text-2xl">Follow us</h2>

                            <div className="flex space-between w-100 gap-12">
                                <FooterIcon title="Twitter" link="/twitter" size={40} />
                                <FooterIcon title="Discord" link="/discord" size={40} />
                                <FooterIcon title="Telegram" link="/telegram" size={40} />
                                <FooterIcon title="Reddit" link="/reddit" size={40} />                     
                            </div>

                        </div>
                </div>
                <div className="flex flex-col items-center my-8">
                    <p>© 2025 {PROJECT_NAME}™</p>
                    <img className="w-5 h-5" src={FranceFlag} alt="france flag"/>
                </div>
        </>
    )
}

export default Footer;