import React, {useContext, useEffect, useState} from "react";
import {message} from "antd";
import {ContainerArticle} from "../Homepage/style";
import {AuthContext} from "../AuthContext";
import Articles from "../../components/atoms/Articles";
import MainTitle from "../../components/atoms/MainTitle";
import dayjs from "dayjs";

function AllArticles() {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    function getPosts() {
        fetch(`/api/posts`, {
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
        getPosts();
    }, []);

    return (
            <div>
                <MainTitle>All articles</MainTitle>
                <ContainerArticle>
                    {posts.map((item, index) => {
                        return (
                            <Articles key={index} title={item.title} description={item.content} date={dayjs(item.creation_date.date).format('DD-MM-YYYY hh:mm')}>{item.id}</Articles>
                        )
                    })}
                </ContainerArticle>
            </div>
        )
}

export default AllArticles