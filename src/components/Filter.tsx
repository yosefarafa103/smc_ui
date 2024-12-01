"use client"
import { filterMills } from "@/actions/filterMillsActions"
import { millsType } from "@/utils/types"
import { useEffect, useState } from "react"
import MillsFilterContainer from "./MillsFilterContainer"
import { HOSTED_API_LINK } from "@/utils/variables"
const Filter = ({ mills }: { mills: millsType }) => {
    const [location, setLocation] = useState<string>('')
    const [sD, setSd] = useState<string>('')
    const [stD, setStd] = useState<string>('');
    const [tn, setTn] = useState<string>('');
    const [stopC, setStopC] = useState<string>('');
    const [data, setdata] = useState<millsType | null>(null);
    const fetchByDate = async () => {
        return await fetch(`${HOSTED_API_LINK}/mill?startDate=${sD}&stopDate=${stD}&search=${location}&tn=${tn}&cat=${stopC.toLowerCase()}`)
    }

    // location => mill
    // section => carryOutBy
    // category => stopCategory
    useEffect(() => {
    }, [sD, stD, location])
    const handelClick = async () => {
        await fetchByDate().then(res => res.json()).then(d => setdata(d))
    }
    console.log(
        stopC,
        data
    );
    // fetchByDate()
    return (
        <>
            {data?.data &&
                <MillsFilterContainer data={data?.data} />
            }
            <h3 className="font-bold text-[2vw] text-center">Filter</h3>
            <section className="p-[1.5vw] border-2 border-[#ddd] rounded-[8px]">
                <section className="flex items-center gap-2 justify-center mb-[10px]">
                    <div className="flex items-center gap-1">
                        <strong> date</strong> <input onChange={(e) => setSd(e.target.value)} type="datetime-local" name="startDate" className="border-[3px] max-w-[100px] border-black rounded-[6px] p-[3px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <strong>to</strong> <input name="stopDate" onChange={(e) => setStd(e.target.value)} className="max-w-[100px] border-[3px] border-black rounded-[6px] p-[3px]" type="datetime-local" />
                    </div>
                </section>
                <section className="flex mt-[15px] flex-col gap-1">
                    <h3 className="font-semibold">Locations</h3>
                    <select onChange={(e) => setLocation(e.target.value)} name="name" required className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                        <option className="text-xs">Choose Mill | Location</option>
                        {mills?.data.map(el => (
                            <option value={el.name.toLowerCase()}>{el.name.toUpperCase()}</option>
                        ))}
                    </select>
                </section>
                <section className="flex mt-[15px] flex-col gap-1">
                    <h3 className="font-semibold">Section</h3>
                    <select name="carryOutBy" required className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                        <option className="text-xs">Choose Section</option>
                        {["Production", "Electrical", "Mechanical", "Planned", "Other"].map(el => (
                            <option value={el.toUpperCase()}>{el.toUpperCase()}</option>
                        ))}
                    </select>
                </section>
                <section className="flex mt-[15px] flex-col gap-1">
                    <h3 className="font-semibold">Category</h3>
                    <select onChange={(e) => setStopC(e.target.value)} name="stopCategory" required className="w-full p-[10px] bg-[#eee] rounded-[12px]">
                        <option className="text-xs">Choose Category</option>
                        {["Maintenance", "Breakdown", "Planned", "Other"].map(el => (
                            <option value={el.toUpperCase()}>{el.toUpperCase()}</option>
                        ))}
                    </select>
                </section>
                <section className="flex mt-[15px] flex-col gap-1">
                    <h3 className="font-semibold">Search</h3>
                    <input name="tn" onChange={(e) => setTn(e.target.value)} type="text" className="p-[5px] rounded-[6px] border-[3px] border-[#bbb] border-solid " placeholder="TN-3045" />
                </section>
                <button disabled={![location, sD, stD, tn, stopC].some(el => el.length > 0)} onClick={handelClick} className='block mt-[15px] bg-blue-600 text-white w-full p-[10px] rounded-[6px]'>Search</button>
            </section>
        </>
    )
}

export default Filter