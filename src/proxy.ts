import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

 
export async function proxy(request: NextRequest) {

    const session = await auth.api.getSession({
         headers: await headers(),
    })
  

if(session){
    return NextResponse.next()
}

}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/courses/add-course/:path*",
    "/courses/manage-courses/:path*",
    "/auth/login",
    "/auth/register",
  ],
}