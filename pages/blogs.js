import React, { useEffect, useRef, useState } from "react";
import PostItem from "../components/postItem";
import Layout from "../components/layout";
import { fetchPosts } from "../utils/fetchPosts";
import Head from "next/head";
import HamBurgerMenu from "../components/hamburgerMenu";
import Footer from "../components/footer";

export async function getStaticProps(context) {
  const res = fetchPosts();
  return {
    props: { posts: res },
  };
}

// const ENDPOINT = "https://jec-glug-blogs.vercel.app/api"
const ENDPOINT = "http://localhost:3000/api";

export default function Blogs(props) {
  const originalPostsRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [searchResPosts, setSearchResPosts] = useState([]);

  useEffect(() => {
    fetchPostsAsync();
  }, []);
  const fetchPostsAsync = async () => {
    try {
      const res = await fetch(ENDPOINT + "/fetchblogs", { method: "GET" }).then(
        (r) => r.json()
      );
      setPosts(res);
      console.log(getUniqueTags(res));
      setTags(getUniqueTags(res));
    } catch (error) {}
  };

  useEffect(() => {
    if (searchResPosts.length != 0) {
      originalPostsRef.current.style.display = "none";
    } else {
      originalPostsRef.current.style.display = "flex";
    }
  }, [searchResPosts]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <HamBurgerMenu
        searchResultCallback={setSearchResPosts}
        postsData={posts}
      />

      <div className="container" ref={originalPostsRef}>
        <div className="row row-blogs">
          {props.posts.map((p) => (
            <PostItem {...p} key={p.id} />
          ))}
        </div>
      </div>

      {searchResPosts.length != 0 && (
        <div className="bgs-container">
          {searchResPosts.map((p) => (
            <>
              <PostItem {...p} key={p.id} />
              <hr />
            </>
          ))}
        </div>
      )}
    </>
  );
}
