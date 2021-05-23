import fs from 'fs'
import path from 'path'
import decodeSlug from '../../utils/decodeSlug';
var url = require('url');
export default (req, res) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;


    const dirPath = path.join(process.cwd(), "./public/static/blogs/") + query.slug
    let content = ""

    if (query.type == 'html')
        content = fs.readFileSync(dirPath + "/index.html", "utf8")
    if (query.type == "md")
        content = fs.readFileSync(dirPath + "/main.md", "utf8")


    res.send(content)
}