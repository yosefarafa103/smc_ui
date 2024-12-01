// "use client"
import Cookies from "js-cookie"
import axios from "axios"
import { useState } from "react"
import { mutateData } from "@/actions/mutateFormActions"
const EditMill = ({ mode = 'edit', handelClose, id, token }: { token?: string, id?: string, mode: "edit" | "add", handelClose?: () => void }) => {
    // const [mill, setMill] = useState<string | null>("")
    // const [tn, setTn] = useState<string | null>("")
    // const [stopDate, setStopDate] = useState<string | null>(null)
    // const [startDate, setStartDate] = useState<string | null>(null)
    // const [stopCategory, setStopCategory] = useState<string | null>("")
    // const [carryOut, setCarryOut] = useState<string | null>("")
    // const [description, setDescription] = useState<string | null>("")

    // const handelSubmitEditForm = async (e: SubmitEvent | any) => {
    //     e.preventDefault()
    //     await fetch(`http://127.0.0.1:8000/mill/${id}`, {
    //         method: "PATCH",
    //         body: JSON.stringify({
    //             tn, mill, stopDate, stopCategory, carryOut, startDate, description
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(d => d.json())
    //     console.log("updated mill!");

    //     // const editedMill = await axios.put(`http://localhost:8000/mill/${id}`, {
    //     //     tn
    //     // },)
    //     // console.log("updated...");
    //     // console.log(editedMill);
    //     // location.reload()
    // }
    const updateMill = mutateData.bind(null, id)
    return (
        <>
            {mode === "add" ?
                <form>
                    <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto lg:py-3">
                        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                {
                                    mode === 'edit' && <span onClick={() => handelClose(false)}>close</span>
                                }
                                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    {mode === 'edit' ? "Edit" : "Add New Data"}
                                </p>
                                <div>
                                    <label className="font-semibold block mb-2 text-sm text-gray-900">
                                        Mill
                                    </label>
                                    <select className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                                        <option value="Mill A">Mill A</option>
                                        <option value="Mill B">Mill B</option>
                                        <option value="Mill C">Mill C</option>
                                        <option value="Mill D">Mill D</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        TN
                                    </label>
                                    <input placeholder="C-3045" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Stop Date
                                    </label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder={`${new Date().toISOString()}`} type="datetime-local" />
                                </div>
                                <div>
                                    <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                        Start Date
                                    </label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder={`${new Date().toISOString()}`} type="datetime-local" />
                                </div>

                                <div>
                                    <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                        Stop  Category
                                    </label>
                                    <select className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                                        <option value="Breakdown">Breakdown</option>
                                        <option value="Planned">Planned</option>
                                        <option value="Maintenance">maintenance</option>
                                        <option value="Other">other</option>
                                    </select>
                                    {/* <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" /> */}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Cary Out By
                                    </label>
                                    <select className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                                        <option value="electrical">Electrical</option>
                                        <option value="mechanical">Mechanical</option>
                                        <option value="production">Production</option>
                                        <option value="planned">Planned</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {/* <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" /> */}
                                </div>
                                <div>
                                    <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                        Description
                                    </label>
                                    <textarea className="bg-gray-50 min-h-[100px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder={`Reason/Comment`} />
                                </div>
                            </div>

                            <button className="w-[90%] ml-4 mx-auto mb-[10px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form> :
                <>
                    <div onClick={() => handelClose(false)} className="bg-[#00000085] z-[10] fixed h-screen w-full top-0 left-0">
                    </div>
                    <form action={updateMill} className="absolute w-1/2 max-md:w-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[20]">
                        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto lg:py-3">
                            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <p className="text-xl flex items-center justify-between font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        {mode === 'edit' ? "Edit" : "Add New Data"}
                                        {
                                            mode === 'edit' && <span className="cursor-pointer" onClick={() => handelClose(false)}>close</span>
                                        }
                                    </p>
                                    {/* <div>
                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            Mill
                                        </label>
                                        <select name="name" required className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                                            <option value="Mill A">Mill A</option>
                                            <option value="Mill B">Mill B</option>
                                            <option value="Mill C">Mill C</option>
                                            <option value="Mill D">Mill D</option>
                                        </select>
                                    </div> */}
                                    <div>
                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            TN
                                        </label>
                                        <input name="tn" required placeholder="Enter TN" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                                    </div>
                                    <div>

                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            Stop Date
                                        </label>
                                        <input name="stopDate" required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder={`${new Date().toISOString()}`} type="datetime-local" />
                                    </div>
                                    <div>
                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            Start Date
                                        </label>
                                        <input name="startDate" required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder={`${new Date().toISOString()}`} type="datetime-local" />
                                    </div>

                                    <div>
                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            Stop  Category
                                        </label>
                                        <select name="stopCategory" required className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                                            <option>Choose</option>
                                            {['maintenance', 'breakdown', 'planned', 'other'].map(el => (
                                                <option value={el}>{el.toUpperCase()}</option>
                                            ))}
                                            <option value="Planned">Planned</option>
                                            <option value="Maintenance">maintenance</option>
                                            <option value="Other">other</option>
                                        </select>
                                        {/* <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" /> */}
                                    </div>
                                    <div>
                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            Carry Out By
                                        </label>
                                        <select name="carriedOutBy" required className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                                            <option>Choose</option>
                                            {["electrical", 'mechanical', 'production', 'planned', 'Other'].map(e => e.toLowerCase()).map(el => (
                                                <option value={el}>{el}</option>
                                            ))}
                                            {/* <option value="mechanical">Mechanical</option>
                                            <option value="production">Production</option>
                                            <option value="planned">Planned</option>
                                            <option value="Other">Other</option> */}
                                        </select>
                                        {/* <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" /> */}
                                    </div>
                                    <div>
                                        <label className="font-semibold block mb-2 text-sm font-medium text-gray-900">
                                            Description
                                        </label>
                                        <textarea name="description" required className="bg-gray-50 min-h-[100px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder={`Reason/Comment`} />
                                    </div>
                                </div>

                                <button className="w-[90%] ml-4 mx-auto mb-[10px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            }
        </>

    )
}

export default EditMill