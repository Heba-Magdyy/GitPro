import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Data } from '../axios';

export default function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: '', body: '', tags: [] });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await Data.get(`posts/${id}`);
                setPost(res.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await Data.put(`posts/${id}`, post);
            navigate(`/posts/${id}`);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    return (
        <div className="container">
            <h1>Edit Post</h1>
            <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Title"
            />
            <textarea
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                placeholder="Body"
            />
            <input
                type="text"
                value={post.tags.join(', ')}
                onChange={(e) => setPost({ ...post, tags: e.target.value.split(', ') })}
           
            />
            <button onClick={handleUpdate}>Save Changes</button>
        </div>
    );
}
