const Edit = () => {
    async function addNewData(e: FormData) {
        "use server"
        // const {} = e.getAll()
        console.log(e.get('tn'));
        console.log(e.get('startD'));
        console.log(e.get('endD'));
        const data = {
            tn: e.get('tn'),
            startDate: e.get('startD'),
            stopDate: e.get('endD')
        }
        await fetch(`http://127.0.0.1:8000/mill/6740aeb55b6c21759dacdcf4`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        //  
        console.log("updated");

    }
    return (
        <>
            <form className="relative flex flex-col gap-1 items-center z-[9999999]" action={addNewData}>
                <input name="tn" placeholder="tn" type="text" />
                <input name="startD" placeholder="startD" type="datetime-local" />
                <input name="endD" placeholder="endD" type="datetime-local" />
                <button>ADD DATA</button>
            </form>
        </>
    )
}

export default Edit