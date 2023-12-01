import React from "react";
import {CustomLinkStyle} from "./style";

function CustomLink({children, link, color}) {
    return (
        <CustomLinkStyle color={color} to={link}>
            {children}
        </CustomLinkStyle>
    )
}

export default CustomLink