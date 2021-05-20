import React from 'react';
import PostItem from '../components/postItem';
import Layout from "../components/layout"
import { fetchPosts } from '../utils/fetchPosts';
import Head from 'next/head'
import HamBurgerMenu from '../components/hamburgerMenu';

export async function getStaticProps(context) {
    const res = fetchPosts()
    return {
        props: { posts: res }
    }
}


export default function Blogs(props) {



    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </Head>
            <HamBurgerMenu />
            <div className="bgs-container">
                {
                    props.posts.map(p => (
                        <PostItem {...p} key={p.id} />
                    ))
                }
            </div>

        </>
    )
}