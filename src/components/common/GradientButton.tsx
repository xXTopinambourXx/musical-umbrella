import React from "react";

interface GradientButtonProps {
  title: string
}

const GradientButton: React.FC<GradientButtonProps> = ({title}) => {

  const buttonStyle = {
    background: "linear-gradient(45deg, rgba(122, 120, 255, 0.5), rgba(235, 126, 217, 0.48))",
    color: "white",
    padding: "0.6rem 2rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
    >
      {title}
    </button>
  );
};

export default GradientButton;