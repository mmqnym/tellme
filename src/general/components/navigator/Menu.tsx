import MenuItem from "./MenuItem";

import ProfileLogo from "../../assets/labels/profile.svg?react";
import StackLogo from "../../assets/labels/stack.svg?react";
import ExperienceLogo from "../../assets/labels/experience.svg?react";
import PortfolioLogo from "../../assets/labels/portfolio.svg?react";
import LinksLogo from "../../assets/labels/links.svg?react";

function Menu() {
  return (
    <ul id="menu" className="hidden select-none flex-row items-center space-x-10 font-ubuntu tracking-wider xl:flex">
      <MenuItem Logo={ProfileLogo} label="Profile" route="/" />
      <MenuItem Logo={StackLogo} label="Stack" route="/stack" />
      <MenuItem Logo={ExperienceLogo} label="Experience" route="/experience" />
      <MenuItem Logo={PortfolioLogo} label="Portfolio" route="/portfolio" />
      <MenuItem Logo={LinksLogo} label="Links" route="/links" />
    </ul>
  );
}

export default Menu;
