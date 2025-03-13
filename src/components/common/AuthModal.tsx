import React, { useEffect, useState } from "react";
import { Backdrop, Box, Button, FormControl, Modal, styled, Tab, Tabs, TextField } from "@mui/material";
import InputAuth from "./InputAuth";

export enum AuthType {
    LOGIN = 0,
    SIGNUP = 1
}

interface AuthModalProps {
    open: boolean;
    type: AuthType;
    onClose: () => void
}

const BlurredBackdrop = styled(Backdrop)(() => ({
    backdropFilter: 'blur(5px)', // Applique un flou de 5px
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur de fond semi-transparente
  }));
  

const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: '100%',
}

const modalStyle = {
    width: 400, // Largeur du modal
    bgcolor: "rgb(15, 15, 15)", // Couleur de fond
    boxShadow: 24, // Ombre
    p: 4, // Padding
    borderRadius: 2, // Coins arrondis
    zIndex: 1,
};

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, type}) => {
    const [activeTab, setActiveTab] = useState<AuthType>(type); // 0 = Connexion, 1 = Inscription

    useEffect(() => {
        if (open) {
            setActiveTab(type);
        }
    }, [open, type]);

    const TabChange = (_event: React.SyntheticEvent, newValue: number) =>{
        setActiveTab(newValue);
    };

    return(
        <Modal sx={containerStyle} open={open} onClose={onClose} BackdropComponent ={BlurredBackdrop} BackdropProps={{timeout: 400}}>
            <Box sx={modalStyle}>

                {/*Tabs for navigation between login/register*/}
                <Tabs value={activeTab} onChange={TabChange} centered>
                    <Tab label="Login" />
                    <Tab label="Signup" />
                </Tabs>

                {/* BOX OF LOGIN */}
                {activeTab === AuthType.LOGIN && (
                <Box>

                    <form noValidate autoComplete="off">
                        <FormControl sx={{gap: "2rem", width: "100%"}}>
                            <InputAuth title={"Email"} id={"email-input-login"} type={"EMAIL"}></InputAuth>
                            <InputAuth title={"Password"} id={"pswd-input-login"} type={"PASSWORD"}></InputAuth>
                            <Button variant="outlined" type="submit">Sign in</Button>
                        </FormControl>
                    </form>
                </Box>
                )}

                {/* BOX OF SIGN UP */}
                {activeTab === AuthType.SIGNUP && (
                <Box>
                    <form>
                        <FormControl sx={{gap: "2rem", width: "100%"}}>
                            <TextField id="name-input-signup" type="text" label="Name" variant="outlined" required />
                            <TextField id="email-input-signup" type="email" label="E-mail" variant="outlined" required/>
                            <TextField id="pswd-input-signup" type="password" label="Password" variant="outlined" required/>
                            <Button variant="outlined" type="submit" sx={{width: "fit-content", alignSelf: "center"}}>Sign up</Button>
                        </FormControl>
                    </form>
                </Box>
                )}


            </Box>
        </Modal>
    )
    

}

export default AuthModal;