import { useState } from 'react';
import Card from '../component/Card';
import FetchHook from '../hooks/FetchHook';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const [posts] = FetchHook();
 const [searchparams] = useSearchParams();
  const [searchh, setsearch] = useState("");


  return (
    <>
      <div className="container text-center bg-primary-subtle">
        <div className="row">
          <div>
            <input
              className='border p-1 mb-2'
              value={searchh}
              type='text'
              placeholder='Search here'
              onChange={(e) => setsearch(e.target.value)} />
          </div>

          {posts.map((e, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4 p-3">
              <Card
                title={e.title}
                body={e.body}
                id={e.id}
                tags={e.tags}
              />
            </div>
          ))}
        </div>
      </div></>
  );
}


{/* <div className="col-12 col-md-6 col-lg-4 p-3">Column</div>
    <div className="col-12 col-md-6 col-lg-4 p-3">Column</div>
    <div className="col-12 col-md-6 col-lg-4 p-3">Column</div> */}


// useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch('https://dummyjson.com/posts');
//         const json = await response.json();
//         setPost(json.posts);
//     };

//     fetchData();
// }, []);






