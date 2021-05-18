import React from 'react';

export default function PostItem({ title, author, date }) {

    return (
        <div className="post-container">
            <h2>{title}</h2>
            <div className="post-meta">
                <p>{author}</p>
                <p>@{date}</p>
            </div>
        </div>
    )
}