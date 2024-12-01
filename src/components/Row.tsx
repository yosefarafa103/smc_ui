"use client"
import { converAndTransformToDate, extractDate } from "@/utils/helpers";
import { dataMills, millsType } from "@/utils/types"
import { useEffect, useState } from "react";
import EditMill from "./form/EditMill";
import { HOSTED_API_LINK } from "@/utils/variables";

function Row({ mill, token }: { mill: dataMills, token?: string, }) {
    const [isSelected, setIsSelected] = useState(false)
    const { description, name, carriedOutBy, startDate, stopDate, tn, duration, stopCategory, _id }: dataMills = mill;
    const { data }: millsType = async () => await fetch(`${HOSTED_API_LINK}/mill/${_id}`).then((data) => data.json())
    // useEffect(() => {

    // }, [])
    // console.log(converAndTransformToDate(new Date(startDate).getTime(), new Date(stopDate).getTime()));

    return (
        <>

            <section className="flex items-center w-full p-[15px] bg-[#f3f3f3]">
                {[`${extractDate(startDate)}`, name, tn, extractDate(startDate), extractDate(stopDate, true), duration, stopCategory].map((item) => (
                    <div onClick={() => {
                        console.log(_id)
                        setIsSelected(true)
                    }
                    } className="cursor-pointer flex-1 max-h-[36px] text-xs font-semibold bg-[#f3f3f3] px-[15px] py-[10px]">{item?.length < 2 ? "_" : item}</div>
                ))}
                {/* <div className="cursor-pointer flex-1 text-sm font-semibold bg-[#fff6ce] px-[15px] py-[10px]">{name}</div> */}
                <div className="cursor-pointer flex-1 text-xs font-semibold bg-[#f3f3f3] px-[15px] py-[10px]">{carriedOutBy?.toUpperCase()}</div>
            </section>
            {isSelected &&
                <EditMill token={token} id={_id ?? _id} handelClose={setIsSelected} mode="edit" />
            }

        </>
    )
}

export default Row