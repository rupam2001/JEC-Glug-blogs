import React from 'react';
import PostItem from '../components/postItem';
import Layout from "../components/layout"

export async function getStaticProps(context) {

    const fs = require("fs")
    const dirPath = "./data/blogs/"
    const directories = fs.readdirSync(dirPath)

    let posts = []

    directories.forEach(dir => {
        const meta = fs.readFileSync(dirPath + dir + "/meta.json", "utf8")
        posts.push(JSON.parse(meta))
    })


    return {
        props: { posts }
    }
}


export default function Blogs(props) {



    return (
        <Layout>

            <div className="bgs-container">
                {
                    props.posts.map(p => (
                        <PostItem {...p} />
                    ))
                }
            </div>
        </Layout>
    )
}