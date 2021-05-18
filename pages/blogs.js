import React from 'react';
import PostItem from '../components/postItem';
import Layout from "../components/layout"
import { fetchPosts } from '../utils/fetchPosts';

export async function getStaticProps(context) {
    const res = fetchPosts()
    return {
        props: { posts: res }
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