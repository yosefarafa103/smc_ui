import BodyContainer from "@/components/BodyContainer";
import EditMill from "@/components/form/EditMill";
import Header from "@/components/Header"
import Row from "@/components/Row";
import { millsType } from "@/utils/types"
import { HOSTED_API_LINK } from "@/utils/variables";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const page = async () => {
    const token = (await cookies()).get('jwt');
    if (!token) {
        return redirect('/')
    }
    const { data }: millsType = await fetch(`${HOSTED_API_LINK}/mill`, {
        next: {
            tags: ['name', 'tn', 'stopCategory', 'carriedOutBy', 'description']
        }
    }).then((data) => data.json())
    if (!data) {
        return redirect('/')
    }

    return (
        <>
            {/* fcefb4 */}
            <>
            <head>
                <title>DATA REPORT</title>
            </head>
            </>
            <Header />
            <BodyContainer>
                <section className="overflow-x-">

                    <section className="flex flex-col min-w-[1200px] gap-1">
                        <section className="flex items-center justify-center">
                            {["No", "creation date", 'mill', 'tn', "start date/time", 'stop date/time', 'duration', 'cary out by', 'category',].map((item) => (
                                <div className="cursor-pointer flex-1 text-xs font-semibold bg-[#dbdbdb] p-[10px] ">{item.toUpperCase()}</div>
                            ))}
                        </section>
                        <section className="flex flex-col gap-1 w-full">
                            {data.map((mill, i) => (
                                <section className="flex items-center">
                                    <div className="cursor-pointer flex-1 h-[66px] flex items-center justify-center text-xs font-semibold bg-[#f3f3f3] px-[15px] py-[10px]">{i + 1}</div>
                                    <Row mill={mill} />
                                </section>
                                // <div className="cursor-pointer text-sm font-semibold bg-[#fcefb4] px-[15px] py-[10px] ">{mill.name}</div>
                            )
                                // <div className="cursor-pointer text-sm font-semibold bg-[#fcefb4] px-[15px] py-[10px] ">{mill.name.toUpperCase()}</div>
                            )}
                        </section>
                    </section>
                </section>
            </BodyContainer>
        </>
    )
}

export default page