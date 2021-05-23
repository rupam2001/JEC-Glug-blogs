import Link from 'next/link';
import React from 'react';
import { loadingBarRef } from '../pages/_app';

const MAXTAGNUM = 4

export default function PostItem({ title, author, date, id, tags, type }) {
    return (
        <Link href={handleRoutingPath(type) + id}>
            <div className="post-container" onClick={() => loadingBarRef.current.continuousStart()}>
                <div style={{ width: "100%" }}>
                    <h2 >{title}</h2>
                </div>
                <div className="post-meta">
                    <p>{author}</p>
                    <p>@{date}</p>
                </div>
                <div className="post-tag-box">
                    {
                        tags.slice(0, MAXTAGNUM).map(t => (
                            <span key={t}>{t}</span>
                        ))
                    }
                    {
                        tags.length > MAXTAGNUM && <span>...</span>
                    }
                </div>
            </div>
        </Link>
    )
}

const handleRoutingPath = (type) => {
    if (type == "html")
        return "/blogs/"
    if (type == "md")
        return "/blogsmd/"
}