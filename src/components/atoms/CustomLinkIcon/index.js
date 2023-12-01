import React from "react";
import {CustomLinkIconStyle} from "./style";

function CustomLinkIcon({icon, color}) {
    return (
        <CustomLinkIconStyle color={color} icon={icon}></CustomLinkIconStyle>
    )
}

export default CustomLinkIcon