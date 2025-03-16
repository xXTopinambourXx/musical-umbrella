import '../App.css';
import '../styles/Accueil.css';
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/home/AuroraBackground";
import ButtonDark from '../components/common/ButtonDark';
import AuthModal, { AuthType } from '../components/common/AuthModal';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

const stackStyle = {
  display: "flex",
  jusfifyContent: "space-evenly"
}

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthType>(AuthType.LOGIN); // Par défaut : Connexion
  

  const handleOpenModal = (type: AuthType) => {
          setAuthType(type);
          setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AuroraBackground>
        <motion.div

          initial={{ opacity: 0.0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}

          className="relative flex flex-col gap-4 px-4">
            <div className="text-3xl md:text-7xl font-extrabold dark:text-white text-left  ">
              Play, earn & <br/>
              Win up to <span className="font-purple">300 000</span> satoshis
            </div>
            <ButtonDark title={'Sign up'} purpleText='now' onClick={() => handleOpenModal(AuthType.SIGNUP)} ></ButtonDark>
        </motion.div>
      </AuroraBackground>
      <Stack sx={stackStyle}>
        <Typography variant='h5' sx={{fontWeight: "700", textAlign: "right", m: "2rem"}}>New faucet, endless rewards</Typography>
      </Stack>
      <AuthModal open={isModalOpen} onClose={handleCloseModal} type={authType} />
    </>

  )
}

export default HomePage;