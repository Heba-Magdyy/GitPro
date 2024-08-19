import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ body, id, tags, title }) {
    return (
        <div className="card p-2" style={{ width: "18rem" }}>
            <div className="card-body">
                <img src="https://www.w3schools.com/html/img_chania.jpg" className="img-thumbnail" alt="Post Thumbnail" />
                <h5>{title}</h5>
                <p className="card-text">
                    {body}
                </p>
                <div className="card-text">
                    {Array.isArray(tags) ? tags.map((tag, i) => (
                        <span key={i} className="badge bg-secondary me-1">#{tag}</span>
                    )) : tags}
                </div>
            </div>
            <Link
                className="p-2 bg-success mt-2 text-white rounded"
                to={`/${id}`}
            >
                Open The Post
            </Link>
        </div>
    );
}
