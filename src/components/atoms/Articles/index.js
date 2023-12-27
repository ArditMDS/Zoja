import React from "react";
import {
    ArticleButton, ArticleDate,
    ArticleDescription,
    ArticleDescriptionContent,
    ArticleTitle, ContainerArticleButton,
    CustomBackgroundImage,
    CustomContainer
} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

function Articles({title, description, date, link}) {
    return (
        <CustomContainer>
            <ArticleTitle className="articleTitle">{title}</ArticleTitle>
            <CustomBackgroundImage src="../../../assets/images/headerHomepage.svg" alt=""/>
            <ArticleDescription className="containerDescription">
                <ArticleDescriptionContent>
                    {description}
                </ArticleDescriptionContent>
                <ContainerArticleButton>
                    <ArticleDate>
                        {date}
                    </ArticleDate>
                    <ArticleButton to={link}>
                        See more
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </ArticleButton>
                </ContainerArticleButton>
            </ArticleDescription>
        </CustomContainer>
    )
}

export default Articles