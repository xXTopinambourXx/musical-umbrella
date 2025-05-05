import '../App.css';
import '../styles/Accueil.css';
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/home/AuroraBackground";
import ButtonDark from '../components/common/ButtonDark';
import AuthModal, { AuthType } from '../components/common/AuthModal';
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FeatureSection from '../components/home/FeatureSection';
import HomePageSection from '../components/home/HomePageSection';

const stackStyle = {
  textAlign: "justify", 
  m: "2.5rem",
  px: "1rem"
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

      <Stack spacing={16} sx={{display: "flex", alignItems: "space-evenly"}}>
        
        <HomePageSection 
          category={'OPTION_FIRST'} 
          text={{
            title: 'New faucet, endless rewards',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
          }} 
          option={'COUNTDOWN'}>
        </HomePageSection>

        <Box>
          <Grid container spacing={12} sx={stackStyle}>
            <Grid size={4}>
                <Typography variant="h5" sx={{fontWeight: "700"}}><span className='font-purple'>Multiple games</span> for all users</Typography>
                <Typography variant='subtitle1' sx={{fontWeight: "300"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant='h1'>CARROUSEL</Typography>
            </Grid>
          </Grid>
        </Box>

        <HomePageSection 
          category={'CENTER'} 
          text={{
            title: 'New faucet, endless rewards',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
          }} 
          option={'CAROUSEL'}>
        </HomePageSection>

        <Box>
          <Grid container spacing={12} sx={stackStyle}>
            <Grid size={6}>
                <Typography variant="h1">LOTTERY</Typography>
            </Grid>
            <Grid size={4}>
              <Typography variant='h5' sx={{fontWeight: "700"}}>Win big with the new <span className='font-purple'>lottery system</span></Typography>
              <Typography variant='subtitle1' sx={{fontWeight: "300"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet cons.</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{display: "grid", flexDirection: "center", width: "100%", gridTemplateColumns: "repeat(4, 1fr)"}}>
          <FeatureSection></FeatureSection>
        </Box>

        <Box>
          <Grid container spacing={12} sx={stackStyle}>
            <Grid size={4}>
                <Typography variant="h5" sx={{fontWeight: "700"}}>Daily <span className='font-purple'>loyalty</span>, daily <span className='font-purple'>rewards</span>!</Typography>
                <Typography variant='subtitle1' sx={{fontWeight: "300"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant='h1'>CALENDAR</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>

        </Box>

      </Stack>


      <AuthModal open={isModalOpen} onClose={handleCloseModal} type={authType} />
    </>

  )
}

export default HomePage;