import fs from 'fs'
export default async (req, res) => {
    //get the all the webpages directory
    const dirPath = "./data/blogs/"
    fs.readdir(dirPath, (err, file) => {
        res.status(200).json({ file })
    })
}