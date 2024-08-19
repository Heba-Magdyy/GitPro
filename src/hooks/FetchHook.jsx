import { useState, useEffect } from 'react';
import { Data } from '../axios';

export default function FetchHook(endpoint = "", query = "", tag = "", page = 1, sort = "asc") {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [tags, setTags] = useState([]); 
    const limit = 10;
    const skip = (page - 1) * limit;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://dummyjson.com/${endpoint}`;
                if (query) {
                    url = `https://dummyjson.com/posts/search?q=${query}`;
                } else if (tag) {
                    url = `https://dummyjson.com/posts/tag/${tag}`;
                }

                const res = await Data.get(url, {
                    params: {
                        limit,
                        skip,
                    },
                });
                
                let sortedData = res.data.posts || [];
                
                if (sort === "asc") {
                    sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
                } else if (sort === "desc") {
                    sortedData = sortedData.sort((a, b) => b.title.localeCompare(a.title));
                }
                
                setData(sortedData);
                setTotal(res.data.total || 0);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const fetchTags = async () => {
            try {
                const res = await Data.get(`https://dummyjson.com/posts/tags`);
                setTags(res.data || []);
            } catch (error) {
                console.error("Error fetching tags:", error);
            }
        };

        fetchData();
        fetchTags();
    }, [endpoint, query, tag, page, sort]);

    return [data, total, tags];
}































// import { useState, useEffect } from 'react';
// import { Data } from '../axios';

// export default function FetchHook(endpoint = "", query = "", tag = "", page = 1, sort = "") {
//     const [data, setData] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [tags, setTags] = useState([]); 
//     const limit = 10;
//     const skip = (page - 1) * limit;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let url = `https://dummyjson.com/${endpoint}`;
//                 if (query) {
//                     url = `https://dummyjson.com/posts/search?q=${query}`;
//                 } else if (tag) {
//                     url = `https://dummyjson.com/posts/tag/${tag}`;
//                 }

//                 const res = await Data.get(url, {
//                     params: {
//                         limit,
//                         skip,
//                         sort,
//                     },
//                 });
//                 setData(res.data.posts || []);
//                 setTotal(res.data.total || 0);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         const fetchTags = async () => {
//             try {
//                 const res = await Data.get(`https://dummyjson.com/posts/tags`);
//                 setTags(res.data || []);
//             } catch (error) {
//                 console.error("Error fetching tags:", error);
//             }
//         };

//         fetchData();
//         fetchTags();
//     }, [endpoint, query, tag, page, sort]);

//     return [data, total, tags];
// }
