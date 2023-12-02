import React from "react";
import {themes} from "../../../styles/themes";
import {CustomNormalLink} from "../../../styles/global";
import {CustomFooter, FooterContainerLinks, FooterContainerLinkSection} from "./style";
import TitleName from "../../atoms/TitleName";
import {CustomSeparateLine} from "../../atoms/SeparateLine/style";

function Footer() {
    return (
        <CustomFooter>
            <main>
                <FooterContainerLinkSection>
                    <FooterContainerLinks>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Homepage</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">About</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">True stories</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Articles</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Contact</CustomNormalLink>
                    </FooterContainerLinks>
                    <FooterContainerLinks>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">RGPD</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">CGU</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Terms & Policy</CustomNormalLink>
                    </FooterContainerLinks>
                    <FooterContainerLinks>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Instagram</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Facebook</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Linkedin</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Whatsapp</CustomNormalLink>
                        <CustomNormalLink color={themes.color.secondary.classic} to="test">Mail</CustomNormalLink>
                    </FooterContainerLinks>
                </FooterContainerLinkSection>

                <CustomSeparateLine color={themes.color.primary.light} width={100}/>

                <FooterContainerLinkSection>
                    <TitleName footer={50}></TitleName>
                    <p>© 2023 Zoja Sadiku, All rights Reserved. Terms | Policy</p>
                </FooterContainerLinkSection>
            </main>
        </CustomFooter>
    )
}

export default Footer