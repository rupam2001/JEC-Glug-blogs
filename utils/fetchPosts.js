export function fetchPosts() {

    const fs = require("fs")
    const dirPath = "./public/data/blogs/"
    const directories = fs.readdirSync(dirPath)

    let posts = []

    directories.forEach(dir => {
        const meta = fs.readFileSync(dirPath + dir + "/meta.json", "utf8")
        posts.push({ ...JSON.parse(meta), id: dir })
    })
    return posts;
}