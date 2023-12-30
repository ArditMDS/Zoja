import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ContainerHeader = styled.div `
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
`

export const ContainerArticle = styled.div `
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  gap: calc(100% / 22);
`

export const ArticleSection = styled.section `
  width: 100%;
  margin: 50px 0 0 0;
`

export const ArticleSectionIcon = styled(FontAwesomeIcon) `
  width: 200px;
  height: 200px;
  color: ${(props) => (props.color)};
`

export const ArticleUpperInfo = styled.div `
  background-color:${(props) => (props.color)};;
  max-width: 100%;
  padding: 50px;
`

export const ArticleSectionTitle = styled.h2 `
  font-family: "Playfair Display";
  font-weight: bold;
  font-size: 38px;
  color: black;
  width: 100%;
  text-align: center;
  margin: 0;
`

export const ArticleUpperContent = styled.div `
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 50px;
`

export const ArticleUpperParagraph = styled.p `
  font-family: "Playfair Display";
  font-size: 20px;
  width: 50%;
`