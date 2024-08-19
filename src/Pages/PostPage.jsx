import React from 'react'
import FetchHook from '../hooks/FetchHook'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function PostPage() {
  const param = useParams();
  const [posts] = FetchHook(param.id);

  return (
    <div>
      <img src="https://www.w3schools.com/html/img_chania.jpg" className="img-thumbnail" alt="..." />
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <p>{posts.tags.map((e, i) => {
        <span key={i}> #{e}</span>
      })}</p>

      <Link className='p-2 bg-success mt-2 text-white rounded' to={"/:id/update"}>Update Post</Link>
    </div>
  )


}
