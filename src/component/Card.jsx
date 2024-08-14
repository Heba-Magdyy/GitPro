import React from 'react'

export default function Card({ img, body, id, tags, title }) {
    return (
        <>
            <div className="card p-2" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text">
                        {body}
                    </p>
                    <p tags="card-text">
                        {tags}
                    </p>
                </div>
            </div>


        </>
    )
}
