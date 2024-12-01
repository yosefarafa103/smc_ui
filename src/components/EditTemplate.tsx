
const EditTemplate = async () => {
    const editedMill = await (fetch(`http://127.0.0.1:8000/mill/6740aeb55b6c21759dacdcf4`, {
        method: "PATCH",
        body: JSON.stringify({
            "tn": "abcde1234"
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }))
    console.log(editedMill);

    return (
        <div>EditTemplate</div>
    )
}

export default EditTemplate