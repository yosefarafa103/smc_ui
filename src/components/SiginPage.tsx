import { MouseEventHandler } from "react"

const SiginPage = ({ handelAuthState }: { handelAuthState: () => MouseEventHandler<HTMLDivElement> | undefined | any }) => {
    return (
        <form>
            <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto lg:py-3">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </p><div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Your username
                            </label>
                            <input placeholder="JohnDoe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Confirm password
                            </label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" />
                        </div>
                        <select className='w-full p-[10px] bg-[#eee]'>
                            <option value="admin">Admin</option>
                            <option value="user">Regular User</option>
                        </select>
                    </div>

                    <button className="w-[90%] ml-4 mx-auto mb-[10px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                        Create an account
                    </button>
                    <div className='text-blue-500 cursor-pointer text-sm mb-[15px] flex items-center justify-center' onClick={handelAuthState}>Do You Have An Exists Account? Login</div>
                </div>
            </div>

        </form>
    )
}

export default SiginPage