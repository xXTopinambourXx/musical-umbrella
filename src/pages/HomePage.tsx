import '../App.css';
import '../styles/Accueil.css';
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/home/AuroraBackground";

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
            <div className="font-light text-base md:text-4xl dark:text-neutral-200 py-4">
              And this, is chemical burn.
            </div>
            <button className="bg-black dark:bg-zinc-600 rounded-full w-fit text-white dark:text-black px-4 py-2">
              Sign up <span className="font-purple">now</span>
            </button>
          </motion.div>
        </AuroraBackground>
  )
}

export default HomePage;