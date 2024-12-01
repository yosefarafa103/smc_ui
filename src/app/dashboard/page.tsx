import AddForm from "@/components/AddForm";
import BodyContainer from "@/components/BodyContainer";
import Header from "@/components/Header";
import Cookies from "js-cookie"
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { millsType, User } from "@/utils/types";
import Date from "@/components/Date";
import EditMill from "@/components/form/EditMill";
import { converAndTransformToDate, convertFromStrTomMs, getPercent, getPercentFromList, getTotal, transformMsToDate } from "@/utils/helpers";
import Filter from "@/components/Filter";
import { redirect } from "next/navigation";
import Mill from "@/components/Mill";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { HOSTED_API_LINK } from "@/utils/variables";

const page = async () => {
    if (!(await cookies()).get("jwt")) {
        return redirect('/')
    }
    const token = jwt.verify((await cookies()).get("jwt")?.value, "heaJWUcDBplyWuYg")
    const { data }: User = await fetch(`${HOSTED_API_LINK}/users/${token.id}`).then((da) => da.json());
    const mills: millsType = await fetch(`${HOSTED_API_LINK}/mill`).then((data) => data.json());
    let totalMs: number = (mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el));
    // console.log(getTotal(mills.data, "name"));
    // carryedoutby
    console.log(totalMs);

    console.log((getTotal(mills.data, "carriedOutBy")).map((m) => {
        // console.log((getTotal(mills.data, "carriedOutBy")), m);
        return getPercentFromList((getTotal(mills.data, "carriedOutBy")), `${m}`)
    }));
    const milsDataChart = {
        labels: ['Mill A', 'Mill B', 'Mill C', "Mill D"],
        values: [25, 25, 25, 25],
        colors: [
            '#f1e3f3',
            '#C2BBF0',
            '#8fb8ed',
            '#62bfed'
        ]
    }
    const stopCatDataChart = {
        labels: ['Other', 'Production', 'Electrical', "Mechnical", "Planned"],
        values: [20, 20, 20, 20, 20],
        colors: [
            "purple",
            '#f1e3f3',
            '#C2BBF0',
            '#8fb8ed',
            '#62bfed'
        ]

    }
    const carriedOutBy = {
        labels: ['Other', 'Breakdown', 'Maintenance', "Planned", "Planned"],
        values: [20, 20, 20, 20, 20],
        colors: [
            '#f1e3f3',
            "purple",
            '#C2BBF0',
            '#8fb8ed',
            '#62bfed'
        ]

    }
    return (
        <>
            <>
                <head>
                    <title>DASHBOARD</title>
                </head>
            </>
            <section className="">
                <Header />
            </section>
            <BodyContainer>
                <section className="flex gap-3">
                    {data.role === "admin" &&
                        <div className="max-lg:hidden flex-[0.8]">
                            {/* <AddForm /> */}
                            <EditMill mode="add" />
                        </div>
                    }
                    <div className="flex-[1]">
                        <div className="font-bold mb-[10px] text-center">
                            TOTAL DOWN TIME
                            <span className="block border-4 border-blue-200 my-[15px] text-black p-[10px] justify-center text-center rounded-[8px] ">{transformMsToDate(mills.data.map((m) => convertFromStrTomMs(m?.duration)).reduce((acc, el) => acc + el))}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-3.5">
                            {mills?.data.map((el, idx) => (
                                <>
                                    <Mill
                                        // console.log(mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el));
                                        totalMs={
                                            mills.data.map((m) => convertFromStrTomMs(m.duration)).reduce((acc, el) => acc + el)
                                        }
                                        // chartDetails={{
                                        //     labels: mills?.data?.map(mil => mil.stopCategory),
                                        //     values: mills.data.map(item => getPercent(totalMs, convertFromStrTomMs(item.duration))),
                                        //     colors: [
                                        //         '#f1e3f3',
                                        //         '#C2BBF0',
                                        //         '#8fb8ed',
                                        //         '#62bfed',
                                        //     ]
                                        // }} 

                                        mill={el} />
                                    {/* <div className="font-bold flex  flex-col gap-2">
                                        TD {el?.name} */}
                                    {/* <div className="flex flex-col gap-2">
                                            <div className="font-bold mb-[10px]">
                                                <span className="block border-4 border-blue-200 text-black p-[10px] rounded-[8px]">{el.duration}</span>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                </>
                            ))}
                        </div>
                        <section className="flex items-center flex-wrap justify-center gap-2">
                            <PieChart data={milsDataChart} width={250} height={250} />
                            <PieChart data={stopCatDataChart} width={250} height={250} />
                            <PieChart data={carriedOutBy} width={250} height={250} />
                        </section>
                        <section className="flex items-center gap-2">

                            <BarChart options={{
                                borderRadius: 14,
                                series: [
                                    { data: [2400, 1398, 9800, 3908, 4800, 3800, 4300], label: 'Mill', id: 'pvId', stack: 'total' },
                                    { data: [4000, 3000, 2000, 2780, 1890, 2390, 3490], label: 'Mill', id: 'uvId', stack: 'total' },
                                ],

                            }} />
                            <LineChart width={400} height={300} />
                            <BarChart
                                options={{
                                    borderRadius: 32,
                                    series: [{ data: [6, 3, 2] }, { data: [4, 1, 6] }, { data: [2, 5, 6] }]
                                    // series={}

                                }} />
                        </section>
                        {/* <LineChart
                            // xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            dataset={[{ x: "Mill A", y: 32 }, { x: "Mill B", y: 41 }]}
                            width={500}
                            height={300}
                            // yAxis={[{ data: [2400, 1398, 9800, 3908, 4800, 3800, 4300], label: 'Mill', id: 'pvId', stack: 'total' },
                            // ]}
                             /> */}
                    </div>
                    <div className="flex-[0.6]">
                        <Filter mills={mills} />
                    </div>
                </section>
            </BodyContainer>
            {/* <Date /> */}
        </>
    )
}

export default page