import React from "react";

import RedditLogo from "../assets/icons/icons8-reddit.svg";
import TelegramLogo from "../assets/icons/icons8-telegram.svg";
import DiscordLogo from "../assets/icons/icons8-discord.svg";
import TwitterLogo from "../assets/icons/icons8-twitter.svg";

import FranceFlag from "../assets/icons/fr.svg";

import { Link } from 'react-router-dom';
import { PROJECT_NAME } from "../config";


const Footer: React.FunctionComponent = () => {

    return (
        <footer>
            <div className="footer flex justify-between top-separator bottom-separator">
                    <div className="flex flex-column gap-1">

                        <h1 className="logo font-xxl">{PROJECT_NAME}</h1>

                        <div className="flex flex-column gap-05 font-thin">
                            <Link to="/terms">Terms & conditions</Link>
                            <Link to="/policy">Privacy policy</Link>
                        </div>

                    </div>

                    <div className="flex">

                        <div className="flex gap-8 ml-5 mr-5">

                            <div className="flex flex-column gap-1 font-light font-l">
                                <Link to="/faucet">The faucet</Link>
                                <Link to="/lottery">The lottery</Link>
                                <Link to="/test">Our games</Link>
                            </div>

                            <div className="flex flex-column gap-1 font-light font-l">
                                <Link to="/news">Faucet news</Link>
                                <Link to="/account">My account</Link>
                                <Link to="/support">Contact us</Link>
                            </div>

                        </div>

                        <div className="flex gap-15 flex-column">

                            <h2 className="logo flex center font-light mr-5 ml-5">Follow us</h2>

                            <div className="flex space-between w-100">
                                <a href="https://twitter.com">
                                    <img src={TwitterLogo} alt="twitter logo"/>
                                </a>
                                <a href="https://cacaboudin.fr">
                                    <img src={DiscordLogo} alt="discord logo"/>
                                </a>    
                                <a href="https://cacaboudin.fr">
                                    <img src={TelegramLogo} alt="telegram logo"/>
                                </a>
                                <a href="https://cacaboudin.fr">
                                    <img src={RedditLogo} alt="reddit logo"/>
                                </a>                         
                            </div>

                        </div>

                    </div>

                    <div className="flex">&nbsp;</div>
                </div>
                <div className="footer flex center">
                    <div className="flex flex-column align-center">
                        <p> {PROJECT_NAME} 2025. All rights reserved </p>
                        <img src={FranceFlag} alt="france flag" />
                    </div>
                </div>
        </footer>
    )
}

export default Footer;