"use client"
import { useState } from "react"
import LoginForm from "./LoginForm"
import SiginInPage from '@/components/SiginPage'
const AuthWrapper = () => {
    const [isLogin, setIsLogin] = useState<Boolean>(false);
    console.log(isLogin);
    return (
        <>
            {!isLogin ?
                // <SiginInPage handelAuthState={() => setIsLogin(prev => !prev)} />
                // :
                <LoginForm handelAuthState={() => setIsLogin(prev => !prev)} /> :
                null
            }
        </>
    )
}

export default AuthWrapper