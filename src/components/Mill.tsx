import { ChartData, dataMills, } from "@/utils/types"
import PieChart from "./PieChart"
import { convertFromStrTomMs, getPercent } from "@/utils/helpers";

const Mill = ({ mill, totalMs, chartDetails }: { mill: dataMills, totalMs: number, chartDetails?: ChartData }) => {
    const { name, duration, stopCategory,carriedOutBy } = mill;
    // console.log(getPercent(totalMs, convertFromStrTomMs(duration)));
    // log
    // console.log(mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el));

    /* 
    {
            labels: stopCategory,
            values: getPercent(convertFromStrTomMs(duration), totalMs),
            colors: 
        }
    */


    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="font-bold flex  flex-col gap-2">
                    TD
                    {name}
                    <div className="flex flex-col gap-2">
                        <div className="font-bold mb-[10px]">
                            {/* TOTAL TIME */}
                            <span className="block border-4 border-blue-200 text-black p-[10px] rounded-[8px]">
                                {duration}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
     
        </section>
    )
}

export default Mill