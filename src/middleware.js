import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("next-auth.session-token");
  let url = req.url;

  if (!verify && url.includes("/feed")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/feed");
  }

  if (!verify && url.includes("/search")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/search");
  }
}
