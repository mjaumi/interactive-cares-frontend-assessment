import React, { useEffect, useState } from 'react';
import styles from './videoPlayer.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import PlayerIFrame from '../../components/PlayerIFrame/PlayerIFrame';
import Playlist from '../../components/Playlist/Playlist';
import axios from '../../utils/axios';

const Videos = () => {
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

    console.log(videos);

    // rendering videos page here
    return (
        <div>
            <Navbar />
            <div className={`container ${styles.ed_tech_video_player}`}>
                <PlayerIFrame video={videos[0]} />
                <Playlist videos={videos} />
            </div>
        </div>
    );
};

export default Videos;