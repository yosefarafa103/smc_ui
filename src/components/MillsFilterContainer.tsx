import { millsType } from "@/utils/types"

const MillsFilterContainer = ({ data }: { data: millsType[] }) => {
    console.log(data.message);

    // if (data?.message === 'err') {
    //     return <div className="text-[3.5vw] font-bold text-red-500">Can Not Found Any Mill With This Filter Data!</div>
    // }
    const { name, duration, stopCategory } = data;
    return (
        <div className="fixed w-full top-0 bg-white grid grid-cols-4 gap-3.5 p-[15px] left-0 h-screen">{Array.isArray(data) ? data?.map((el) => (
            <section className="" >
                <div className="font-bold flex  flex-col gap-2">
                    TD {el.name}
                    <div className="flex flex-col gap-2">
                        <div className="font-bold mb-[10px]">
                            {/* TOTAL TIME */}
                            <span className="block border-4 border-blue-200 text-black p-[10px] rounded-[8px]">{el.duration}</span>
                        </div>
                    </div>
                    <div className="text-sm uppercase">(stop category:) <br />

                        <mark>
                            {el.stopCategory}
                        </mark>
                    </div>
                    <div>
                        tn: <br /> <mark>
                            {el.tn}
                        </mark>
                    </div>
                    <div className="uppercase">
                        carriedOutBy: <br />
                        <mark className="text-sm">

                            {el.carriedOutBy}
                        </mark>
                    </div>
                </div>
            </section>
        )) :
            <div className="font-bold flex  flex-col gap-2">
                TD {name}
                <div className="flex flex-col gap-2">
                    <div className="font-bold mb-[10px]">
                        {/* TOTAL TIME */}
                        <span className="block border-4 border-blue-200 text-black p-[10px] rounded-[8px]">{duration}</span>
                    </div>
                    <div>{stopCategory}</div>
                </div>

            </div>
        }
        </div>
    )
}

export default MillsFilterContainer