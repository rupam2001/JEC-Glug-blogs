import React, { useEffect, useReducer, useRef, useState } from "react";
import Link from "next/link";
import styles from "./styles/hamburger.module.css";

export default function HamBurgerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const mainRef = useRef(null);
  const [postsData, setPostsData] = useState(props.postsData);
  const [tags, setTags] = useState([]);
  const [currentActiveTag, setCurrentActiveTag] = useState("All");

  useEffect(() => {
    if (props.postsData) {
      setPostsData(props.postsData);
      setTags(["All", ...getUniqueTags(props.postsData)]);
    }
  }, [props]);

  const handleHamburgerClick = () => {
    let btn = document.getElementById("hm-btn");
    btn.classList.toggle("opened");
    btn.setAttribute("aria-expanded", btn.classList.contains("opened"));
    setIsOpen(!isOpen);
    console.log("oyyye")
  };

  useEffect(() => {
    if (isOpen) {
      mainRef.current.style.height = "100vh";
      mainRef.current.style.backgroundColor = "white";
    } else {
      mainRef.current.style.height = "100%";
      mainRef.current.style.backgroundColor = "transparent";
    }
  }, [isOpen]);

  const [searchItem, setSearchItem] = useState(null);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    search(searchItem);
  };
  const search = (itemToSearch) => {
    let res = [];
    for (let i = 0; i < postsData.length; i++) {
      const { tags } = postsData[i];
      if (
        [...tags].indexOf(itemToSearch.toLowerCase()) != -1 ||
        postsData[i].title.toLowerCase().indexOf(itemToSearch.toLowerCase()) !=
        -1 ||
        postsData[i].author.toLowerCase().indexOf(itemToSearch.toLowerCase()) !=
        -1
      ) {
        res.push(postsData[i]);
      }
    }
    props.searchResultCallback(res);
  };
  const getUniqueTags = (allPosts) => {
    let tagsMap = {};
    allPosts.forEach(({ tags }) => {
      tags.forEach((t) => {
        if (t in tagsMap == false) tagsMap[t] = true;
      });
    });
    let res = [];
    for (const key in tagsMap) res.push(key);
    return res;
  };
  const handleTagClick = (t) => {
    setCurrentActiveTag(t);
    if (t == "All") {
      props.searchResultCallback(postsData);
    }
    search(t);
  };

  return (
    <div className={`container hm-main`} ref={mainRef}>
      <div className={`hm-box ${styles.menuContainer}`}>
        <button
          className="menu"
          id="hm-btn"
          onClick={handleHamburgerClick}
          aria-label="Main Menu"
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        {postsData && (
          <div className="post-searh-box">
            <form onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <input
                  placeholder="Search anything"
                  className="form-control"
                  onChange={(e) => setSearchItem(e.target.value)}
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <div className={`post-tag-main ${styles.tagsContainer}`}>
        {tags.map((t) => (
          <div
            key={t}
            className={
              currentActiveTag == t ? "post-tag-box-active" : "post-tag-box"
            }
            onClick={() => handleTagClick(t)}
          >
            <span>{t}</span>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="menu-box">
          <ol>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/blogs">
              <li>Blogs</li>
            </Link>
          </ol>
        </div>
      )}
    </div>
  );
}
