"use client"
import { logout } from '@/actions/logoutAction'
import { LuPower } from 'react-icons/lu'
import Cookies from "js-cookie"
import { redirect } from 'next/navigation'

const Logout = () => {
    return (
        <span onClick={async () => {
            await new Promise((resolve) => {
                resolve(logout())
            })
            console.log('logout .');
            Cookies.remove("jwt")
            redirect('/')
        }} className="size-[40px] cursor-pointer flex items-center justify-center text-[22px]">
            <LuPower />
        </span>
    )
}

export default Logout