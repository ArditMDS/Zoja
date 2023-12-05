import React, { useState } from 'react'

import { initialState } from '../constants/index'

const defaultContext = {
    user: initialState,
    setUser: () => true,
}
export const AuthContext = React.createContext(defaultContext)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(initialState)
    const context = {
        user,
        setUser,
    }

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthProvider