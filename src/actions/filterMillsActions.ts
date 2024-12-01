"use server";
export async function filterMills(options: {}, e: FormData) {
  const data = {
    tn: e.get("tn"),
    mill: e.get("mill"),
    startDate: e.get("startDate"),
    stopDate: e.get("stopDate"),
    carryOutBy: e.get("carryOutBy"),
    description: e.get("description"),
    stopCategory: e.get("stopCategory"),
  };
  // await fetch(`http://127.0.0.1:8000/mill/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  //   next: {
  //     tags: Object.keys(data),
  //   },
  // });
  console.log(data);
}
