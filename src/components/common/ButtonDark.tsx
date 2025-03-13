import { Button } from "@mui/material";
import React from "react";

const styleButton = {
    fontSize: "1.1rem",
    width: "fit-content",
    color: "#ffffff",
    marginTop: "1.6rem",
    padding: "0.5rem 1rem",
    backgroundColor: "rgba(12, 12, 12, 0.88)",
    outlineColor: "rgba(255, 255, 255, 0.09)",
    outlineWidth: "6px",
    outlineStyle: "solid",
    ":hover": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        outlineColor: "rgba(255, 255, 255, 0.08)",
    },
}

interface ButtonProps {
  title: string;
  purpleText?: string; // Texte en violet optionnel
}

const ButtonDark: React.FC<ButtonProps> = ({ title, purpleText = null }) => {
  return (
    <Button
      variant="text"
      sx={styleButton}
    >
      {title}
      {purpleText && (
        <>
          &nbsp;
          <span className="font-purple">{purpleText}</span>
        </>
      )}
    </Button>
  );
};

export default ButtonDark;