import styled from "styled-components";
import {themes} from "../../../styles/themes";

export const CustomFooter = styled.footer `
  background-color: ${themes.color.primary.classic};
  padding: 50px 50px 0 50px;
`

export const FooterContainerLinkSection = styled.section `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterContainerLinks = styled.div `
  display: flex;
  flex-direction: column;
`