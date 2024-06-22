import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //  method 1
  const reqHeaders = new Headers(request.headers);
  const authHeader = reqHeaders.get("Authorization");
  const theme = request.cookies.get("theme");

  // method 2
  const reqHeaders2 = headers();
  const authHeader2 = reqHeaders2.get("Authorization");
  cookies().set("resultPerPage", "20");

  console.log("authHeader", authHeader);
  console.log("authHeader2", authHeader2);
  console.log("theme", theme);
  console.log("resultPerPage", cookies().get("resultPerPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
