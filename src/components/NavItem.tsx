import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    title: string;
    options?: string[];
}

const NavItem: React.FC<NavItemProps> = ({ title, options }) => {
    return (
        <div className="navbar-options-container" data-navbar-option={title.toLowerCase()}>

            <p className="title-navbar-options" id={`navbarOptionTitle_${title.toLowerCase()}`}>{title}</p>
                
            <div className="navbar-options font-light" id="options-navbar">
                {options?.map((option, index) => (
                    <Link key={index} to={`/${option.toLowerCase().replace(/\s+/g, '-')}`} className="flex space-between">{option}</Link>
                ))}
            </div>
        </div>
    )
}

export default NavItem;