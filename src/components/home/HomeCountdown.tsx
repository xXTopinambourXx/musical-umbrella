import Countdown from "react-countdown";
import { Typography } from "@mui/material";


interface CountdownRendererProps {
  minutes: number,
  seconds: number
}

// Composant de rendu personnalisé
const renderer = ({ minutes, seconds }: CountdownRendererProps) => {
  return (
    <Typography variant="h1" sx={{ fontWeight: 900, fontStyle: "italic", textAlign: "center" }}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Typography>
  );
};

const HomeCountdown = () => {
  const targetDate = Date.now() + 15 * 60 * 1000; // 15 minutes

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default HomeCountdown;