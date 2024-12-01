"use client"
import axios, { AxiosError, AxiosResponse } from "axios"
import { MouseEventHandler, useState } from "react";
import Message from "./Message";
import { createCookie } from "@/utils/createCookie";
import { getCookie, setCookie } from "cookies-next";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { HOSTED_API_LINK } from "@/utils/variables";
interface message {
    type: "err";
    m?: {
        status: string,
        type: string
    }
}
interface successMessage {
    type: "success";
    m?: {
        status: string,
        token: string
    }
}
const LoginForm = ({ handelAuthState }: { handelAuthState: () => MouseEventHandler<HTMLDivElement> | undefined | any }) => {
    const login = `${HOSTED_API_LINK}/users/login`
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const [message, setMessage] = useState<{} | message | successMessage>({});
    const submit = async (e: any) => {
        e.preventDefault();
        try {
            const { data }: AxiosResponse = await axios.post(login, {
                username,
                password
            })
            const { token } = data
            console.log(data);
            // setCookie('jwt', token, {
            //     expires: new Date(Date.now() + 3600000),
            //     httpOnly: true,
            // })

            Cookies.set('jwt', token)
            localStorage.setItem('randomString', token)
            // createCookie(data)
            setMessage({ type: "success", m: data })

            router.push('dashboard')
        } catch (err: any) {
            setMessage({ type: "err", m: err.response.data })
        }
    }

    return (
        <>
            {/* <div className=" text-white mt-[20px] lg:mt-[20vh] log p-[15px] rounded-[22px]">
                <h4 className="text-center text-[22px]">Login</h4>
                <form onSubmit={submit} className="flex flex-col gap-2 pt-[20px]">
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" required className="p-[8px] text-sm placeholder:text-[#bbb] font-semibold outline-none text-black rounded-[12px]" />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="text" required className="p-[8px] text-sm placeholder:text-[#bbb] font-semibold outline-none text-black rounded-[12px]" />
                    <button className="bg-[#0574e3] transition-alla duration-[300ms]  hover:bg-[#0466c8] p-[10px] rounded-[10px]" type="submit">Login</button>
                </form>
            </div> */}
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    {/* defjhig */}
                    {
                        message &&
                        <Message message={message?.m?.message || message?.m?.status} type={message?.type} />
                    }
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                    <form onSubmit={submit} className="flex flex-col">
                        <input type="text" onChange={(e) => setUsername(e.target.value)} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
                        <div className="flex items-center justify-between flex-wrap">
                            <p className="text-gray-900 text-sm mt-0"> Don't have an account? <div onClick={handelAuthState} className="text-sm text-blue-500 cursor-pointer inline hover:underline mt-4">Signup</div></p>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm