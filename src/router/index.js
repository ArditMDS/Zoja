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
    }
}

export default routes