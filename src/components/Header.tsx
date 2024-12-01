import Link from "next/link"
import { LuPower } from "react-icons/lu"
import Logo from "./Logo"
import { cookies } from "next/headers"
import { User } from "@/utils/types"
import jwt from 'jsonwebtoken'
import userProfile from '@/assets/1564535_customer_user_userphoto_account_person_icon.png'
import { logout } from "@/actions/logoutAction"
import Logout from "./Logout"
import { HOSTED_API_LINK } from "@/utils/variables"

const Header = async () => {
    const { id } = jwt.verify((await cookies()).get("jwt")?.value, "heaJWUcDBplyWuYg")
    const { data }: User = await fetch(`${HOSTED_API_LINK}/users/${id}`).then((da) => da.json())
    return (
        <section className="px-[4vw] py-[15px] border-b-4 border-b-solid border-b-black">
            <div className="flex items-center justify-between">
                <Logo color="white" />
                <div className="flex items-center gap-4">
                    {["dashboard", "data report"].map((el: string) => (
                        <Link href={`${el.split(' ').join('-')}`} className="font-[700]">{el.toUpperCase()}</Link>
                    ))}
                    <div className="font-[700] ml-[25px] flex items-center gap-2 cursor-pointer">
                        <div className="size-[30px]">
                            <img src={userProfile.src} loading="lazy" alt="22" />
                        </div>
                        {data.username}</div>
                    <Logout />
                </div>
            </div>
        </section>
    )
}

export default Header