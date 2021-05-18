export function fetchPostContent(postDir) {
    const fs = require('fs');
    const path = require("path")


    const dirPath = path.join(process.cwd(), "./public/data/blogs/") + postDir
    const htmlPage = fs.readFileSync(dirPath + "/index.html", "utf8")
    return htmlPage
}