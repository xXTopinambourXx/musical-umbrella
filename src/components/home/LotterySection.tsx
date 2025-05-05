import { Typography } from "@mui/material";
import Countdown from "react-countdown";



interface LottertySectionProps {
    days: number;
    hours: number;
    minutes: number;
}

const renderer = ({ days, hours, minutes }: LottertySectionProps) => {
    let daysText;
    let hoursText;
    let minutesText;

    hours < 2 ? hoursText = "hour" : hoursText = "hours";
    minutes < 2 ? minutesText = "minute" : minutesText = "minutes";
    days < 2 ? daysText = "day" : daysText = "days";

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
                Next lottery in :
            </Typography>

            <Typography variant="h4" sx={{textAlign: "center", border: "1px solid #282828", padding: "1rem", borderRadius: "10px", backgroundColor: "#282828"}}>
                    {days} {daysText}, {hours} {hoursText}, {minutes} {minutesText}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
                Cash prize of :
            </Typography>

            <Typography variant="h3" sx={{textAlign: "center", border: "1px solid #282828", padding: "1rem", borderRadius: "10px", backgroundColor: "#282828"}}>
                0.00458393 btc
            </Typography>
        </>
    );
}

const LotterySection = () => {

    const targetDate = Date.now() + 48 * 60 * 60 * 1000; // 2 days

    return (
        <div>
            <Countdown date={targetDate} renderer={renderer} />
        </div>
    );
};

export default LotterySection;