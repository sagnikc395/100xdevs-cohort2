// backend in next.js using api routes.

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//return a simple username and password

const client = new PrismaClient();

export async function GET() {
  const user = await client.user.findFirst({});
  return Response.json({ name: user?.username, email: user?.username });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  // console.log(body);
  return NextResponse.json({ message: "Signed up" });
}
