import { useState, useEffect } from 'react';
import { Data } from '../axios';

export default function FetchHook() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        await Data.get().then((e) => setPosts(e.data.posts));

    }

    useEffect(() => { fetchData()
    }, []);

    return [posts];
}
