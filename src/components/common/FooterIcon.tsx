import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsDiscord, BsTelegram, BsReddit } from "react-icons/bs";
import { IconType } from "react-icons";

type IconName = "Twitter" | "Discord" | "Telegram" | "Reddit";

interface FooterIconProps {
  title: IconName;
  size?: number;
  link: string;
}

const iconComponents:  Record<IconName, IconType> = {
  Twitter: BsTwitter,
  Discord: BsDiscord,
  Telegram: BsTelegram,
  Reddit: BsReddit,
};

const FooterIcon: React.FC<FooterIconProps> = ({ title, size = 32, link }) => {
  const IconComponent = iconComponents[title];
  return (
    <Link to={link}>
      {IconComponent && <IconComponent size={size} className=" icon-default hover:scale-110 transition-transform duration-200 hover:text-white" fill="currentColor"/> }
    </Link>
  );
};

export default FooterIcon;