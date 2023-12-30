import styled from "styled-components";
import {Link} from "react-router-dom";
import {themes} from "../../../styles/themes";

export const ArticleDate = styled.p `
  font-family: Garamond;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
`

export const ArticleButton = styled(Link) `
  font-family: Garamond;
  text-decoration: none;
  color: ${themes.color.secondary.classic};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
`

export const ContainerArticleButton = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ArticleDescriptionContent = styled.p `
  font-family: Garamond;
  width: 100%;
`

export const ArticleDescription = styled.div `
  max-width: 100%;
  min-width: calc(100% - 20px);
  height: 130px;
  background-color: white;
  position: absolute;
  bottom: -150px;
  padding: 10px;
  display: flex;
  gap: 10px;
  transition: 500ms;
`

export const ArticleTitle = styled.h2 `
  width: 100%;
  height: 100px;
  background-color: white;
  position: absolute;
  top: -100px;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Garamond;
  font-weight: normal;
  font-size: 48px;
  overflow: hidden;
  margin: 0;
  border-radius: 10px 10px 0 0;
  transition: 500ms;
`

export const CustomContainer = styled.div `
  width: calc(100%/3.3) ;
  margin-bottom: 50px;
  height: 400px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0 0;
  position: relative;
  overflow: hidden;
  &:hover {
    .articleTitle {
      top: 0;
    }
    .containerDescription {
      bottom: 0;
    }
  }
`

export const CustomBackgroundImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`