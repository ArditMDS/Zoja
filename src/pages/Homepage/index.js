import React, {useEffect, useState} from "react";
import {
    ArticleSection,
    ArticleSectionIcon,
    ArticleSectionTitle, ArticleUpperContent,
    ArticleUpperInfo, ArticleUpperParagraph,
    ContainerArticle,
    ContainerHeader
} from "./style";
import MainTitle from "../../components/atoms/MainTitle";
import HeaderFilter from "../../components/atoms/HeaderFilter";
import HeaderImage from "../../components/atoms/HeaderImage";
import {message} from "antd";
import Articles from "../../components/atoms/Articles";
import dayjs from "dayjs";
import {faBook, faBrain} from "@fortawesome/free-solid-svg-icons";
import {themes} from "../../styles/themes";

function Homepage() {
    const [posts, setPosts] = useState([]);
    function getPosts() {
        fetch(`/api/posts?limit=3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.code_response === 200) {
                    setPosts(response.posts);
                } else {
                    message.error('Un problème est survenu lors de la récupération des données')
                }
            })
            .catch((error) => {
                console.error('error', error)
                message.error("Une erreur s'est produite lors de la récupération des données")
            })
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line
    }, [posts.length])

    return (
        <main>
            <ContainerHeader>
                <HeaderFilter/>
                <HeaderImage/>
            </ContainerHeader>
            <MainTitle>Recent articles</MainTitle>
            <ContainerArticle>
                {posts.map((item, index) => {
                    return (
                        <Articles key={index} title={item.title} description={item.content} date={dayjs(item.creation_date.date).format('DD-MM-YYYY hh:mm')}></Articles>
                    )
                })}
            </ContainerArticle>
            <ArticleSection>
                <ArticleUpperInfo color={themes.color.primary.classic}>
                    <ArticleSectionTitle>Lorem ipsum dolor sit amet consectetur. </ArticleSectionTitle>
                    <ArticleUpperContent>
                        <ArticleSectionIcon color={themes.color.primary.light} icon={faBrain} />
                        <ArticleUpperParagraph>
                            Lorem ipsum dolor sit amet consectetur.
                            Dolor at nunc suscipit bibendum cursus lacus praesent urna.
                            Justo tristique lacus tempor egestas. Vitae vitae eu consequat ultrices amet aenean.
                            Eu vitae sagittis fusce pellentesque eu viverra.
                        </ArticleUpperParagraph>
                    </ArticleUpperContent>
                </ArticleUpperInfo>
                <ArticleUpperInfo color={themes.color.primary.light}>
                    <ArticleSectionTitle>Lorem ipsum dolor sit amet consectetur. </ArticleSectionTitle>
                    <ArticleUpperContent>
                        <ArticleUpperParagraph>
                            Lorem ipsum dolor sit amet consectetur.
                            Dolor at nunc suscipit bibendum cursus lacus praesent urna.
                            Justo tristique lacus tempor egestas. Vitae vitae eu consequat ultrices amet aenean.
                            Eu vitae sagittis fusce pellentesque eu viverra.
                        </ArticleUpperParagraph>
                        <ArticleSectionIcon color={themes.color.primary.classic} icon={faBook} />
                    </ArticleUpperContent>
                </ArticleUpperInfo>
            </ArticleSection>
        </main>
    )
}

export default Homepage