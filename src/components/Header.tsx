import { useEffect } from "react";
import { PROJECT_NAME } from "../config";
import "../styles/Header.css";

import { Link } from "react-router-dom";
import NavItem from "./HeaderNavItem";
import { Button } from "@mui/material";

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

                <div className="header flex space-between align-center justify-between">
                    
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

                        <NavItem title={"Test"}></NavItem>
                        
                    </div>
                    
                    <div className="items-center flex gap-5 mx-5">
                        <Link to="/login"><Button variant="outlined" sx={{color: '#ffffff', borderColor: '#ffffff', boxSizing: "content-box"}}>Sign in</Button></Link>
                        <Link to="/register"><Button variant="contained" sx={{color: '#000000', backgroundColor: "#ffffff", boxSizing: "content-box"}}>Sign up</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;