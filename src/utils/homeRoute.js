import routes from "../router";

export const homeRouteUtils = (role) => {
    return routes[Object.keys(routes).find((key) => routes[key].name === role) || 'login'].path
}