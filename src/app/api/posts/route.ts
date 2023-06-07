import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req: NextRequest) => {
  try {
    /* await connect();

    const posts = await Post.find(); */
    return NextResponse.json({ data: "Hello" }, { status: 200 });
  } catch (err) {
    /* console.log(err); */
    return NextResponse.json({ data: "Database Error" }, { status: 500 });
  }
};
