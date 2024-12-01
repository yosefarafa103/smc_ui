import { cookies } from "next/headers";
interface successMessage {
  type: "success";
  m: {
    status: string;
    token: string;
  };
}
export async function createCookie(data: successMessage) {
  return (await cookies()).set("jwt", data.m.token, {
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
  });
}
