import fs from 'fs'
import path from 'path'
var url = require('url');
export default (req, res) => {
    // return res.send("hello")
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    const dirPath = path.join(process.cwd(), "./public/static/blogs/") + query.slug
    const htmlPage = fs.readFileSync(dirPath + "/index.html", "utf8")
    res.send(htmlPage)
}