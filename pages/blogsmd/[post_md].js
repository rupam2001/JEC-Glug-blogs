import React, { useEffect, useState } from "react";
import HamBurgerMenu from "../../components/hamburgerMenu";
import { loadingBarRef } from "../_app";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import styles from "./style.module.css";

// const ENDPOINT = "https://jec-glug-blogs.vercel.app/api/fetchblogContent?slug=";
const ENDPOINT = "http://localhost:3000/api/fetchblogContent?slug=";

export const getStaticProps = async ({ params }) => {
  const slug = params.post_md;
  const md = await fetch(ENDPOINT + slug + "&type=md", { method: "GET" }).then(
    (res) => res.text()
  );
  return {
    props: { md, slug },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: !false,
  };
};

export default function Post(props) {
  useEffect(() => {
    loadingBarRef.current.complete();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <HamBurgerMenu />
      <br />
      <br />
      <hr />
      <div className="p-main">
        {/* <div className="p-container" dangerouslySetInnerHTML={{ __html: props.md }} id="posts-html" /> */}
        <div className={`p-container-md ${styles.mdContainer}`}>
          <ReactMarkdown>{props.md}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
