import React, { useState } from 'react';
import FetchHook from '../hooks/FetchHook';
import Card from '../component/Card';

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [posts, totalPosts, tags] = FetchHook("posts", searchQuery, selectedTag, currentPage, sortOption);

    const totalPages = Math.ceil(totalPosts / 10);

    return (
        <div className="container text-center back">
            <div className="mb-3">
                <input
                    className='border p-1 mb-2 rounded mt-4'
                    value={searchQuery}
                    type='text'
                    placeholder='Search here'
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                    }}
                />





                <label className='ms-4 me-1 '>Sort by </label>
                <select
                    className='bg-sucess opacity-75 rounded'
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value=""> Select...</option>
                    <option value="asc">Title (A-Z)</option>
                    <option value="desc">Title (Z-A)</option>
                </select>




                <label className='ms-4 me-1'>Filter by Tag </label>
                <select
                    className='bg-sucess opacity-75 rounded '
                    value={selectedTag}
                    onChange={(e) => {
                        setSelectedTag(e.target.value);
                        setCurrentPage(1);
                    }}
                >
                    <option value="">All Tags</option>
                    {tags.map((tag, index) => (
                        <option key={index} value={tag.name}>
                            {tag.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3 ">

            </div>


            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-12 col-md-6 col-lg-4 p-3">
                        <Card
                            title={post.title}
                            body={post.body}
                            id={post.id}
                            tags={post.tags.map(tag => `#${tag}`).join(" ")}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-3">
                <button
                    className='p-2 bg-success mt-2 text-white rounded'
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="mx-2">{currentPage} / {totalPages}</span>
                <button
                    className='p-2 bg-success mt-2 text-white rounded'
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
