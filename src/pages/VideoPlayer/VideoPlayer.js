import React, { useEffect, useState } from 'react';
import styles from './videoPlayer.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import VideoPlayerFrame from '../../components/VideoPlayerFrame/VideoPlayerFrame';
import Playlist from '../../components/Playlist/Playlist';
import axios from '../../utils/axios';

const Videos = () => {
    // integration of react hooks here
    const [videos, setVideos] = useState([]);
    const [user, setUser] = useState({});

    // fetching all the videos from database here
    useEffect(() => {
        const getVideos = async () => {
            const { data } = await axios.get('/videos');
            setVideos(data);
        }

        getVideos();
    }, []);

    // fetching user by email from database here
    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios.get('/user?email=mjaumi2864@gmail.com');

            setUser(data);
        }

        getUser();
    }, []);

    // rendering videos page here
    return (
        <div>
            <Navbar />
            <div className={`container ${styles.ed_tech_video_player}`}>
                <VideoPlayerFrame noteList={user?.added_notes} />
                <Playlist
                    videos={videos}
                    user={user}
                />
            </div>
        </div>
    );
};

export default Videos;