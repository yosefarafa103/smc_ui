"use strict";
exports.__esModule = true;
var mutateFormActions_1 = require("@/actions/mutateFormActions");
var EditMill = function (_a) {
    // const [mill, setMill] = useState<string | null>("")
    // const [tn, setTn] = useState<string | null>("")
    // const [stopDate, setStopDate] = useState<string | null>(null)
    // const [startDate, setStartDate] = useState<string | null>(null)
    // const [stopCategory, setStopCategory] = useState<string | null>("")
    // const [carryOut, setCarryOut] = useState<string | null>("")
    // const [description, setDescription] = useState<string | null>("")
    var _b = _a.mode, mode = _b === void 0 ? 'edit' : _b, handelClose = _a.handelClose, id = _a.id, token = _a.token;
    // const handelSubmitEditForm = async (e: SubmitEvent | any) => {
    //     e.preventDefault()
    //     await fetch(`http://127.0.0.1:8000/mill/${id}`, {
    //         method: "PATCH",
    //         body: JSON.stringify({
    //             tn, mill, stopDate, stopCategory, carryOut, startDate, description
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(d => d.json())
    //     console.log("updated mill!");
    //     // const editedMill = await axios.put(`http://localhost:8000/mill/${id}`, {
    //     //     tn
    //     // },)
    //     // console.log("updated...");
    //     // console.log(editedMill);
    //     // location.reload()
    // }
    var updateMill = mutateFormActions_1.mutateData.bind(null, id);
    return (React.createElement(React.Fragment, null, mode === "add" ?
        React.createElement("form", null,
            React.createElement("div", { className: "flex  flex-col items-center justify-center px-6 py-8 mx-auto lg:py-3" },
                React.createElement("div", { className: "w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0" },
                    React.createElement("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8" },
                        mode === 'edit' && React.createElement("span", { onClick: function () { return handelClose(false); } }, "close"),
                        React.createElement("p", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl" }, mode === 'edit' ? "Edit" : "Add New Data"),
                        React.createElement("div", null,
                            React.createElement("label", { className: "font-semibold block mb-2 text-sm text-gray-900" }, "Mill"),
                            React.createElement("select", { className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                                React.createElement("option", { value: "Mill A" }, "Mill A"),
                                React.createElement("option", { value: "Mill B" }, "Mill B"),
                                React.createElement("option", { value: "Mill C" }, "Mill C"),
                                React.createElement("option", { value: "Mill D" }, "Mill D"))),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block mb-2 text-sm font-medium text-gray-900" }, "TN"),
                            React.createElement("input", { placeholder: "C-3045", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", id: "username", type: "text" })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block mb-2 text-sm font-medium text-gray-900" }, "Stop Date"),
                            React.createElement("input", { className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", placeholder: "" + new Date().toISOString(), type: "datetime-local" })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Start Date"),
                            React.createElement("input", { className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", placeholder: "" + new Date().toISOString(), type: "datetime-local" })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Stop  Category"),
                            React.createElement("select", { className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                                React.createElement("option", { value: "Breakdown" }, "Breakdown"),
                                React.createElement("option", { value: "Planned" }, "Planned"),
                                React.createElement("option", { value: "Maintenance" }, "maintenance"),
                                React.createElement("option", { value: "Other" }, "other"))),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block mb-2 text-sm font-medium text-gray-900" }, "Cary Out By"),
                            React.createElement("select", { className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                                React.createElement("option", { value: "electrical" }, "Electrical"),
                                React.createElement("option", { value: "mechanical" }, "Mechanical"),
                                React.createElement("option", { value: "production" }, "Production"),
                                React.createElement("option", { value: "planned" }, "Planned"),
                                React.createElement("option", { value: "Other" }, "Other"))),
                        React.createElement("div", null,
                            React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Description"),
                            React.createElement("textarea", { className: "bg-gray-50 min-h-[100px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", placeholder: "Reason/Comment" }))),
                    React.createElement("button", { className: "w-[90%] ml-4 mx-auto mb-[10px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white", type: "submit" }, "Submit")))) :
        React.createElement(React.Fragment, null,
            React.createElement("div", { onClick: function () { return handelClose(false); }, className: "bg-[#00000085] z-[10] fixed h-screen w-full top-0 left-0" }),
            React.createElement("form", { action: updateMill, className: "absolute w-1/2 max-md:w-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[20]" },
                React.createElement("div", { className: "flex  flex-col items-center justify-center px-6 py-8 mx-auto lg:py-3" },
                    React.createElement("div", { className: "w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0" },
                        React.createElement("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8" },
                            React.createElement("p", { className: "text-xl flex items-center justify-between font-bold leading-tight tracking-tight text-gray-900 md:text-2xl" },
                                mode === 'edit' ? "Edit" : "Add New Data",
                                mode === 'edit' && React.createElement("span", { className: "cursor-pointer", onClick: function () { return handelClose(false); } }, "close")),
                            React.createElement("div", null,
                                React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "TN"),
                                React.createElement("input", { name: "tn", required: true, placeholder: "Enter TN", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", id: "username", type: "text" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Stop Date"),
                                React.createElement("input", { name: "stopDate", required: true, className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", placeholder: "" + new Date().toISOString(), type: "datetime-local" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Start Date"),
                                React.createElement("input", { name: "startDate", required: true, className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", placeholder: "" + new Date().toISOString(), type: "datetime-local" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Stop  Category"),
                                React.createElement("select", { name: "stopCategory", required: true, className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                                    React.createElement("option", null, "Choose"),
                                    ['maintenance', 'breakdown', 'planned', 'other'].map(function (el) { return (React.createElement("option", { value: el }, el.toUpperCase())); }),
                                    React.createElement("option", { value: "Planned" }, "Planned"),
                                    React.createElement("option", { value: "Maintenance" }, "maintenance"),
                                    React.createElement("option", { value: "Other" }, "other"))),
                            React.createElement("div", null,
                                React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Carry Out By"),
                                React.createElement("select", { name: "carriedOutBy", required: true, className: "w-full p-[10px] bg-[#eee] rounded-[12px]" },
                                    React.createElement("option", null, "Choose"),
                                    ["electrical", 'mechanical', 'production', 'planned', 'Other'].map(function (e) { return e.toLowerCase(); }).map(function (el) { return (React.createElement("option", { value: el }, el)); }))),
                            React.createElement("div", null,
                                React.createElement("label", { className: "font-semibold block mb-2 text-sm font-medium text-gray-900" }, "Description"),
                                React.createElement("textarea", { name: "description", required: true, className: "bg-gray-50 min-h-[100px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5", placeholder: "Reason/Comment" }))),
                        React.createElement("button", { className: "w-[90%] ml-4 mx-auto mb-[10px] bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white", type: "submit" }, "Submit")))))));
};
exports["default"] = EditMill;
