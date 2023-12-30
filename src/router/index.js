const routes = {
    login: {
        path: '/login',
        name: 'login',
        access: '*'
    },
    register: {
        path: '/register',
        name: 'register',
        access: '*'
    },
    homepage: {
        path: '/homepage',
        name: 'CLIENT',
        access: 'CLIENT'
    },
    articles: {
        path: '/all-articles',
        name: 'all-articles',
        access: 'CLIENT'
    }
}

export default routes