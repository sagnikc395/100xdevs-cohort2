// backend in next.js using api routes.

import { NextRequest } from "next/server";

//return a simple username and password

export function GET() {
  return Response.json({
    email: "sagnik321@gmail.com",
    name: "sagnikc395",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  return Response.json({
    message: "You are logged in!",
  });
}
