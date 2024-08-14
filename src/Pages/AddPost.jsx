import React, { useEffect, useState } from 'react'
import { Data } from '../axios';

export default function AddPage() {

  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [added, setAdded] = useState(false);


  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault(e);
        Data.post("https://dummyjson.com/posts/add",
          {
            userId: 1,
            title,
            body,
          })
          .then(console.log)
          .then(() => { setAdded(true), setbody(""), settitle("") })
      }}>

        <div className='container mt-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="write the title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Write the body of your post ...
            </label>
            <textarea
              className="form-control"
              id="body"
              rows={3}
              value={body}
              onChange={(e) => setbody(e.target.value)}
            />
          </div>


          {/* <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="write your tags"
          />
        </div> */}


          <div>
            <button type='submit' className='btn btn-primary'>Add Post</button>
          </div>
        </div>
      </form>
    </>
  )
}
