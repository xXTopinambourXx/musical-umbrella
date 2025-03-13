import '../App.css';
import '../styles/Accueil.css';
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/home/AuroraBackground";
import ButtonDark from '../components/common/ButtonDark';

const HomePage = () => {

  return (
      <AuroraBackground>
        <motion.div

          initial={{ opacity: 0.0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}

          className="relative flex flex-col gap-4 px-4"
        >
            <div className="text-3xl md:text-7xl font-extrabold dark:text-white text-left  ">
              Play, earn & <br/>
              Win up to <span className="font-purple">300 000</span> satoshis
            </div>
            <ButtonDark title={'Sign up'} purpleText='now'></ButtonDark>
          </motion.div>
        </AuroraBackground>
  )
}

export default HomePage;