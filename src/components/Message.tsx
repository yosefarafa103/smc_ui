const Message = ({ type, message }: { type: string, message: string }) => {
    return (
        <div className={`text-center leading-[1] text-sm mb-[15px] ${type === "err" ? "bg-red-400" : type === "success" ? "bg-green-400" : "bg-transparent"} text-white p-[10px] rounded-[8px]`}> {message}</div>
    )
}

export default Message