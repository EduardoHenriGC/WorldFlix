<<<<<<< HEAD
// import { NextResponse } from "next/server";

// export default function middleware(req) {
//   let verify = req.cookies.get("next-auth.session-token");
//   let url = req.url;

//   if (!verify && url.includes("/teste")) {
//     return NextResponse.redirect("http://localhost:3000/");
//   }

//   if (verify && url === "http://localhost:3000/") {
//     return NextResponse.redirect("http://localhost:3000/teste");
//   }

//   if (!verify && url.includes("/feed")) {
//     return NextResponse.redirect("http://localhost:3000/");
//   }
//   if (verify && url === "http://localhost:3000/") {
//     return NextResponse.redirect("http://localhost:3000/feed");
//   }

//   if (!verify && url.includes("/search")) {
//     return NextResponse.redirect("http://localhost:3000/");
//   }
//   if (verify && url === "http://localhost:3000/") {
//     return NextResponse.redirect("http://localhost:3000/search");
//   }
// }
=======
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("next-auth.session-token");
  let url = req.url;

  if (!verify && url.includes("/teste")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/teste");
  }

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
>>>>>>> 1da5e50c4c4f1f7530277c60f246e11a8ca6adff
