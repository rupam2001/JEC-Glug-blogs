import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import HamBurgerMenu from '../../components/hamburgerMenu';
import Layout from '../../components/layout';
import { fetchPostContent } from '../../utils/fetchPostContent';
import { loadingBarRef } from '../_app';
import Head from 'next/head'

const ENDPOINT = "https://jec-glug-blogs.vercel.app/api/fetchblogContent?slug="

export const getStaticProps = async ({ params }) => {
    const slug = params.post;
    const _ = fetchPostContent(slug)
    const html = await fetch("http://192.168.37.87:3000/api/fetchblogContent?slug=" + slug, { method: "GET" }).then(res => res.text())
    return {
        props: { html, slug }
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
        try {

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
                images[i].style.marginTop = "1rem"
            }
            loadingBarRef.current.complete()

        } catch (e) { }
    }, [])
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </Head>
            <HamBurgerMenu />
            <div className="p-main">
                <div className="p-container" dangerouslySetInnerHTML={{ __html: props.html }} id="posts-html">
                    {/* <div  className="p-html">
                </div> */}
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

    return script
}