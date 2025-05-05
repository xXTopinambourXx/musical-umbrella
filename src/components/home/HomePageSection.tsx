import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import HomeCountdown from "./HomeCountdown";
import GradientButton from "../common/GradientButton";
import { FlipWords } from "../common/flip-words";
import { ReactNode } from "react";
import LotterySection from "./LotterySection";

const stackStyle = {
    textAlign: "justify", 
    m: "2.5rem",
    px: "1rem"
}

type Category = "TEXT_FIRST" | "OPTION_FIRST" | "CENTER";
type Option = "CAROUSEL" | "CALENDAR" | "COUNTDOWN" | "LOTTERY";

interface HomePageSectionProps {
  category: Category;
  text: { title: string | ReactNode ; description: string | ReactNode };
  option: Option;
}

const HomePageSection: React.FC<HomePageSectionProps> = ({ category, text, option }) => {
  const renderContent = () => {

    const textBlock = (
      <Grid size={4}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {text.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 300, fontSize: "1.05em"}}>
          {text.description}
        </Typography>
      </Grid>
    );

    const centerTextBlock = (
      <Grid size={12} sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <Typography variant="h3" sx={{fontWeight: 900, textAlign: "center"}}>
          Spin, drop, explode — <FlipWords words={["win your way", "own the game", "feel the rush", "take the prize"]} className="font-gradient-purple"></FlipWords>
        </Typography>
        <Typography variant="subtitle1" sx={{width: "50%", fontWeight: 300, textAlign: "center", mt: "1rem", fontSize: "1.1em"}}>
          {text.description}
        </Typography>
      </Grid>
    );

    const centerOptionBlock = (
      <Grid size={12} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <>
            <Typography variant='h1'>{option}</Typography>
          </>
      </Grid>
    );

    const optionBlock = (
      <Grid size={6} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {option === "COUNTDOWN" ? (
          <>
            <HomeCountdown />
            <GradientButton title="Claim reward" />
          </>
        ): option === "LOTTERY" ? (
          <>
            <LotterySection />
          </>
        ) : (
          <>
            <Typography variant='h1'>{option}</Typography>
          </>
        )}
      </Grid>
    );

    return category === "TEXT_FIRST" ? (
      <>
        {textBlock}
        {optionBlock}
      </>
    ) : category === "OPTION_FIRST" ? (
      <>
        {optionBlock}
        {textBlock}
      </>
    ) : (
      <>
        {centerTextBlock}
        {centerOptionBlock}
      </>
    );
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Grid container spacing={6} sx={stackStyle}>
        {renderContent()}
      </Grid>
    </Box>
  );
};

export default HomePageSection;