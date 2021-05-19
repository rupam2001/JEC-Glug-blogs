import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import { fetchPostContent } from '../../utils/fetchPostContent';


export const getStaticProps = async ({ params }) => {
    const slug = params.post;
    const _ = fetchPostContent(slug)
    const html = await fetch("https://jec-glug-blogs.vercel.app/api/fetchblogContent?slug=" + slug, { method: "GET" }).then(res => res.text())

    const finalHtml = html
    return {
        props: { html: finalHtml, slug }
    }
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: !false,
    };
};

export default function Post(props) {
    useEffect(() => {
        let div = document.getElementById("posts-html")
        let images = div.getElementsByTagName("img")
        for (let i = 0; i < images.length; i++) {
            let oldSrc = images[i].src;
            let splitted = window.location.href.split("/")
            let cur_url = ""
            for (let i = 0; i < splitted.length - 2; i++) {
                cur_url += splitted[i] + "/"
            }

            let newSrc = cur_url + "api/blogsapi?slug=" + props.slug + "&img=" + oldSrc.split("/").reverse()[0]
            images[i].src = newSrc
        }

    }, [])
    return (
        <>
            <Helmet>
                <script>
                    {
                        `
                       `
                    }
                </script>
            </Helmet>

            <div className="p-container">
                <div dangerouslySetInnerHTML={{ __html: props.html }} id="posts-html" className="p-html">
                </div>
            </div>

        </>
    )
}

function preProccessHtml(html) {
    const script = `
    <script>
        alert("Script Embbeded!");
    </script>
    `
    const pos = html.lastIndexOf("</body>")
    const result = html.slice(0, pos) + script + html.slice(pos, html.length)

    // var xArray; 
    // var Poses = []
    // const re = RegExp("<img")
    // while(xArray = re.exec()) {
    //     Poses.push(xArray)
    // }







    return script
}