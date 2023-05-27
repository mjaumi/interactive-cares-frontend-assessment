import { useEffect, useState } from 'react';
import axios from '../utils/axios';

// custom hook to fetch all the videos from database
const useGetVideos = () => {
    // integration of react hooks here
    const [videos, setVideos] = useState([]);

    // fetching all the videos from database here
    useEffect(() => {
        const getVideos = async () => {
            const { data } = await axios.get('/videos');
            setVideos(data);
        }

        getVideos();
    }, []);

    return videos;
}

export default useGetVideos;