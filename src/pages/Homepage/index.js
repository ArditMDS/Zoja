import React, {useEffect, useState} from "react";
import {ContainerArticle, ContainerHeader} from "./style";
import MainTitle from "../../components/atoms/MainTitle";
import HeaderFilter from "../../components/atoms/HeaderFilter";
import HeaderImage from "../../components/atoms/HeaderImage";
import {message} from "antd";
import Articles from "../../components/atoms/Articles";
import dayjs from "dayjs";

function Homepage() {
    const [posts, setPosts] = useState([]);
    function getClients() {
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
        getClients()
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
                {posts.map((item) => {
                    return (
                        <Articles title={item.title} description={item.content} date={dayjs(item.creation_date.date).format('DD-MM-YYYY hh:mm')}></Articles>
                    )
                })}
            </ContainerArticle>
        </main>
    )
}

export default Homepage