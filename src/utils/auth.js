const decodeJwt = (token = localStorage.getItem('token')) => {
    const base64Url = token?.split('.')[1]
    if (base64Url === undefined || base64Url === '') {
        return {
            exp: 0,
            iat: 0,
            roles: [],
            email: '',
        }
    }
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''),
    )
    return JSON.parse(jsonPayload)
}
const hasExpired = (expirationDate = decodeJwt().exp) => {
    return (
        expirationDate === undefined ||
        expirationDate === 0 ||
        parseInt(Date.now().toString().substring(0, 10), 0) >= expirationDate
    )
}

const auth = {
    decodeJwt,
    hasExpired,
    isAuth: () => !hasExpired()
}

export default auth