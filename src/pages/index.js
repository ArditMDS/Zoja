import React, { useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import NavBar from '../components/organisms/NavBar'

import routes from '../router/index'
import auth from '../utils/auth'
import useAuth from '../hooks/useAuth/index'
import { AuthContext } from './AuthContext'
import {homeRouteUtils} from "../utils/homeRoute";
import Footer from "../components/organisms/Footer";

const PageWrapper = ({ children }) => {
    const { me } = useAuth()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (auth.isAuth()) {
            me()
        } else {
            let found = false
            for (const routeKey in routes) {
                const route = routes[routeKey]
                if (route.access === '*' && location.pathname.startsWith(route.path)) {
                    found = true
                    break
                }
            }
            if (!found) {
                navigate(routes.login.path)
            }
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (auth.isAuth()) {
            const currentRole = auth.decodeJwt().roles.role
            const currentRouteKey = Object.keys(routes).find((key) => location.pathname.startsWith(routes[key].path))
            const currentRoute = currentRouteKey && routes[currentRouteKey]
            const isAuthorizedCurrentRoute = Object.keys(routes).some(
                (key) =>
                    routes[key].path === currentRoute?.path &&
                    (routes[key].access.includes(currentRole) || (currentRoute.access === '*' && !currentRole)),
            )
            if (!isAuthorizedCurrentRoute) {
                navigate(homeRouteUtils(auth.decodeJwt().roles.role))
            }
        } else {
            let found = false
            for (const routeKey in routes) {
                const route = routes[routeKey]
                if (route.access === '*' && location.pathname.startsWith(route.path)) {
                    found = true
                    break
                }
            }
            if (!found) {
                navigate(routes.login.path)
            }
        }
        // eslint-disable-next-line
    }, [user, location])

    return (
        <div>
            <NavBar />
            <div>{children}</div>
            <Footer/>
        </div>
    )
    //if (auth.isAuth()) {
    //    return (
    //        <div>
    //            <NavBar />
    //            <div>{children}</div>
    //            <Footer/>
    //        </div>
    //    )
    //} else {
    //    return (
    //        <div>
    //           {children}
    //        </div>
    //    )
    //}
}

export default PageWrapper