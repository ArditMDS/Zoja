import { message } from 'antd'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { initialState } from '../../constants/index'
import { AuthContext } from '../../pages/AuthContext'

import routes from '../../router'

import { homeRouteUtils } from '../../utils/homeRoute'
import auth from '../../utils/auth'


function useAuth() {
    const navigate = useNavigate()
    const {setUser} = useContext(AuthContext)
    const me = () => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token)
        fetch(`/api/me`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({email: decodedToken.email}),
        })
            .then((res) => res.json())
            .then((response) => {
                setUser(response)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const login = async ({email, password}) => {
        await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({email, password}),
        })
            .then((res) => res.json())
            .then(async (response) => {
                if (response.code_response === 200) {
                    localStorage.setItem('token', response.token)
                    await me()
                    message.success('Connexion réussie. Bienvenue !')
                    //navigate(homeRouteUtils(auth.decodeJwt().roles[0]))
                    navigate(homeRouteUtils(auth.decodeJwt().roles[0].role))
                } else {
                    message.error('Votre mot de passe ou votre email sont incorrects')
                }
            })
            .catch((error) => {
                console.error('error', error)
            })
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(initialState)
        navigate(routes.login.path)
        message.success('Vous êtes deconnecté')
    }

    return {login, me, logout}
}

export default useAuth