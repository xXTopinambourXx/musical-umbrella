import { useEffect } from "react";
import { PROJECT_NAME } from "../config";
import "../styles/Header.css";

import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Header: React.FunctionComponent = () => {
    const isLoggedIn = false;

    useEffect(() => {
        if (isLoggedIn) {
            return
        }
    })

    return (
        <>
        <div className="content">

                <div className="header flex space-between align-center">
                    
                    <Link to="/">
                        <div className="font-bold text-3xl decoration-inherit text-white m-2">
                            <h2>{ PROJECT_NAME }</h2>
                        </div>
                    </Link>

                    <div className="header-navbar" id="main-navbar">

                        <NavItem title={"Games"} options={["Dice", "Crash", "Bombs", "Plinko"]}></NavItem>

                        <NavItem title={"Faucet"}></NavItem>

                        <NavItem title={"Lottery"}></NavItem>

                        <NavItem title={"Support"} options={["Contact us", "Bug report", "Q&A", "New updates"]}></NavItem>
                        
                    </div>
                    
                    <div className="actions flex gap-05 hide-mobile">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;