import fs from 'fs'
import url from 'url'
export default (req, res) => {
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    const file = process.cwd() + `/public/data/blogs/${query.slug}/images/${query.img}`

    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.setHeader('Content-Type', "text/jpeg");
        s.pipe(res);
    });
    s.on('error', function (e) {
        console.log(e)
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('Not found');
    });
}