import fs from 'fs'
let cache = []
export default (req, res) => {
    if (cache.length) {
        return res.status(200).json(cache)
    }
    const dirPath = process.cwd() + `/public/static/blogs/`
    const directories = fs.readdirSync(dirPath)

    let posts = []

    directories.forEach(dir => {
        const meta = fs.readFileSync(dirPath + dir + "/meta.json", "utf8")
        posts.push({ ...JSON.parse(meta), id: dir })
    })
    cache = posts
    res.status(200).json(posts)
}