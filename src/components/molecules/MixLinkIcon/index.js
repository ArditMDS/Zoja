import React from "react";
import {MixLinkIconStyle} from "./style";
import CustomLinkIcon from "../../atoms/CustomLinkIcon";
import CustomLink from "../../atoms/CustomLink";

function MixLinkIcon({iconColor, textColor, icon, link, children}) {
    return(
        <MixLinkIconStyle>
            <CustomLinkIcon color={iconColor} icon={icon}></CustomLinkIcon>
            <CustomLink color={textColor} link={link}>{children}</CustomLink>
        </MixLinkIconStyle>
    )
}

export default MixLinkIcon