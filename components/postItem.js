import Link from 'next/link';
import React from 'react';
import { loadingBarRef } from '../pages/_app';

export default function PostItem({ title, author, date, id }) {
    return (
        <Link href={"/blogs/" + id}>
            <div className="post-container" onClick={() => loadingBarRef.current.continuousStart()}>
                <h2 >{title}</h2>
                <div className="post-meta">
                    <p>{author}</p>
                    <p>@{date}</p>
                </div>
            </div>
        </Link>
    )
}