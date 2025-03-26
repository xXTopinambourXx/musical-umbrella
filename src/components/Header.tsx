import React from "react";
import { useState } from "react";
import { PROJECT_NAME } from "../config";
import "../styles/Header.css";

import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import AuthModal, { AuthType } from "./common/AuthModal";
import HeaderNavItem from "./HeaderNavItem";

const Header: React.FunctionComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [authType, setAuthType] = useState<AuthType>(AuthType.LOGIN); // Par défaut : Connexion

    // Fonction pour ouvrir la modale avec le bon type (connexion ou inscription)
    const handleOpenModal = (type: AuthType) => {
        setAuthType(type);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <Stack className="content">

                <Stack className="header flex space-between align-center justify-between" direction={'row'}>
                    
                    <Link to="/">
                        <div className="font-extrabold text-3xl decoration-inherit text-white m-3">
                            <h2>{ PROJECT_NAME }</h2>
                        </div>
                    </Link>

                    <Stack 
                        id="main-navbar" 
                        direction={'row'} 
                        spacing={16}
                        sx={{
                            justifyContent: "space-evenly",
                            alignItems: "center", }}>

                        <HeaderNavItem title={"Games"} options={["Dice", "Crash", "Bombs", "Plinko"]}></HeaderNavItem>

                        <HeaderNavItem title={"Faucet"}></HeaderNavItem>

                        <HeaderNavItem title={"Lottery"}></HeaderNavItem>

                        <HeaderNavItem title={"Support"} options={["Contact us", "Bug report", "Q&A", "New updates"]}></HeaderNavItem>

                        <HeaderNavItem title={"Test"}></HeaderNavItem>
                        
                    </Stack>
                    
                    <Stack className="items-center flex gap-5 mx-5" direction={"row"}>
                        <Button 
                            variant="text" 
                            sx={{ color: '#ffffff', borderColor: '#ffffff', boxSizing: "content-box", ":hover": { backgroundColor: "rgba(255,255,255,0.15)" }}}
                            onClick={() => handleOpenModal(AuthType.LOGIN)} // Ouvre la modale en mode "Connexion"
                        >
                            Sign in
                        </Button>
                        <Button 
                            variant="outlined" 
                            sx={{ color: '#ffffff', borderColor: '#ffffff', boxSizing: "content-box", ":hover": { backgroundColor: "rgba(255,255,255,0.15)" }}}
                            onClick={() => handleOpenModal(AuthType.SIGNUP)} // Ouvre la modale en mode "Inscription"
                        >
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
                <AuthModal open={isModalOpen} onClose={handleCloseModal} type={authType} />
            </Stack>
        </>
    )
}

export default Header;