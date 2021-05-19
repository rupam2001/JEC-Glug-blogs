import fs from 'fs'
export default (req, res) => {
    const dirPath = process.cwd() + `/public/static/blogs/`
    const directories = fs.readdirSync(dirPath)

    let posts = []

    directories.forEach(dir => {
        const meta = fs.readFileSync(dirPath + dir + "/meta.json", "utf8")
        posts.push({ ...JSON.parse(meta), id: dir })
    })
    res.status(200).json({ posts })
}