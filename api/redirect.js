export default function (req, res) {
  const hostname = req.headers.host;
  const { pathname } = new URL(req.url, "http://localhost");

  if (hostname === "cognitive-test-gamma.vercel.app") {
    if (pathname === "/") {
      res.writeHead(302, { Location: "/" });
      res.end("Welcome to the home page!");
    } else if (pathname === "/imageUpload") {
      res.writeHead(302, { Location: "/imageUpload" });
      res.end("You are on the imageUpload page!");
    } else if (pathname === "/predict") {
      res.writeHead(302, { Location: "/predict" });
      res.end("You are on the predict page!");
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  }
}
