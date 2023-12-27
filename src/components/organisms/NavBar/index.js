import React from "react";
import {faBookOpen, faEnvelope, faHouse, faInfoCircle, faNewspaper} from "@fortawesome/free-solid-svg-icons";

import {NavBarStyle} from "./style";
import {themes} from "../../../styles/themes";

import MixLinkIcon from "../../molecules/MixLinkIcon";
import TitleName from "../../atoms/TitleName";
import CustomLogin from "../../atoms/CustomLogin";

function NavBar(){
    return(
        <NavBarStyle>
            <TitleName/>
            <MixLinkIcon link="/homepage" icon={faHouse} iconColor={themes.color.primary.light} textColor={themes.color.secondary.classic}>
                Homepage
            </MixLinkIcon>
            <MixLinkIcon link="/about" icon={faInfoCircle} iconColor={themes.color.primary.light} textColor={themes.color.secondary.classic}>
                About
            </MixLinkIcon>
            <MixLinkIcon link="/articles" icon={faNewspaper} iconColor={themes.color.primary.light} textColor={themes.color.secondary.classic}>
                Articles
            </MixLinkIcon>
            <MixLinkIcon link="test" icon={faBookOpen} iconColor={themes.color.primary.light} textColor={themes.color.secondary.classic}>
                Your stories
            </MixLinkIcon>
            <MixLinkIcon link="test" icon={faEnvelope} iconColor={themes.color.primary.light} textColor={themes.color.secondary.classic}>
                Contact
            </MixLinkIcon>
            <CustomLogin/>
        </NavBarStyle>
    )
}
export default NavBar