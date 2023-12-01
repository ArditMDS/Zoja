import React from "react";
import {MainTitleStyle} from "./style";

function MainTitle({children}) {
    return(
        <MainTitleStyle>{children}</MainTitleStyle>
    )
}

export default MainTitle