import moment from "moment"


const Date = () => {
    return (
        <div className="fixed flex gap-[15px] bg-[#eee] p-[15px] rounded-[8px] bottom-3 right-3">
            <div className="flex items-center gap-2">
                Date
                <h3 className="font-semibold p-[10px] rounded-[8px] bg-white font-[clash]">
                    {moment().subtract(10, 'days').calendar()}
                </h3>
            </div>
            <section className="flex items-center gap-2">
                Time
                <h3 className="font-semibold p-[10px] rounded-[8px] bg-white font-[clash]">
                    {moment().format('LT')}
                </h3>
            </section>
        </div>
    )
}

export default Date