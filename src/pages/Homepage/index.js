import React from "react";
import {ContainerHeader} from "./style";
import MainTitle from "../../components/atoms/MainTitle";
import HeaderFilter from "../../components/atoms/HeaderFilter";
import HeaderImage from "../../components/atoms/HeaderImage";

function Homepage() {
    return (
        <main>
            <ContainerHeader>
                <HeaderFilter/>
                <HeaderImage/>
            </ContainerHeader>
            <MainTitle>Recent articles</MainTitle>
        </main>
    )
}

export default Homepage