"use client"

import { IoMdArrowDropdown } from "react-icons/io";
const AddForm = () => {
    return (
        <div className="p-[15px] flex-col gap-2 border-4 border-solid border-black min-h-[80vh] flex ">
            <h3 className="font-[700] text-center text-[20px]">Add New Data</h3>
            <form>
                <div className="relative">
                    <section className="mt-[10px]">
                        <h4 className="text-sm mb-[10px]">Mill</h4>
                        <select required className="bg-[#eee] border-2 border-solid border-black text-sm cursor-pointer px-[10px] py-[5px] w-full" id="">
                            <option className="cursor-pointer">{`Select Mill`}</option>
                            {["Mill A", "Mill B", "Mill C", "Mill D"].map((el) => (
                                <option className="cursor-pointer" value={el}>{el}</option>
                            ))}
                        </select>
                    </section>
                    <section className="mt-[10px]">
                        <h4 className="text-sm mb-[10px]">Stop Category</h4>
                        <select required className="bg-[#eee] border-2 border-solid border-black text-sm cursor-pointer px-[10px] py-[5px] w-full" id="">
                            <option className="cursor-pointer">{`Select Mill`}</option>
                            {["Maintenance", "Breakdown", "Planned", "Other"].map((el) => (
                                <option className="cursor-pointer" value={el.toLowerCase()}>{el}</option>
                            ))}
                        </select>
                    </section>
                    <section className="mt-[10px]">
                        <h4 className="text-sm mb-[10px]">Machine | TN</h4>
                        {/* Maintenance, Breakdown,Planned, Other */}
                        <input required type="text" maxLength={7} className="bg-[#eee] border-2 border-solid border-black placeholder:text-sm text-sm cursor-pointer px-[10px] py-[5px] w-full" placeholder={`Enter motor number`.toUpperCase()} />
                    </section>
                    <section className="flex justify-between items-center">
                        <section className="flex mt-[10px] text-sm flex-col gap-2">
                            <label className="font-bold" htmlFor="start">Start Date</label>
                            <input type="datetime-local" onChange={(e) => console.log(e.target.value)
                            } name="" id="start" />
                            <label className="font-bold" htmlFor="end">Stop Date</label>
                            <input type="datetime-local" name="" id="end" />
                        </section>
                    </section>
                    {/* date start, stop  */}
                    <section className="mt-[10px]">
                        <h4 className="text-sm mb-[10px]">Carry Out By</h4>
                        {/* Production, Electrical, Mechanical, Planned, Other */}
                        <select required className="bg-[#eee] border-2 border-solid border-black text-sm cursor-pointer px-[10px] py-[5px] w-full" id="">
                            <option className="cursor-pointer">{`Select Mill`}</option>
                            {["Production", "Electrical", "Mechanical", "Planned", "Other"].map((el) => (
                                <option className="cursor-pointer" value={el.toLowerCase()}>{el}</option>
                            ))}
                        </select>
                        <section className="mt-[15px]">
                            <h4 className="text-sm mb-[10px]">{"Description/reson".toUpperCase()}</h4>
                            {/* Maintenance, Breakdown,Planned, Other */}
                            <textarea maxLength={100} minLength={80} className="bg-[#eee] border-2 border-solid border-black placeholder:text-sm text-sm cursor-pointer px-[10px] py-[5px] w-full min-h-[150px]" placeholder={`comment`.toUpperCase()} />
                        </section>
                    </section>
                </div>
                <button type="submit" className="bg-black text-white px-[20px] mx-auto block py-[5px] rounded-[10px]">Submit</button>
            </form>
        </div>
    )
}

export default AddForm