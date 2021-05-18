export function fetchPostContent(postDir) {
    const fs = require('fs');
    const dirPath = "./public/data/blogs/" + postDir
    const htmlPage = fs.readFileSync(dirPath + "/index.html", "utf8")
    return htmlPage
}