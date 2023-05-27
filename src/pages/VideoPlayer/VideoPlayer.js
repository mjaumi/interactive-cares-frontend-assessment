import React from 'react';
import styles from './videoPlayer.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import VideoPlayerFrame from '../../components/VideoPlayerFrame/VideoPlayerFrame';
import Playlist from '../../components/Playlist/Playlist';
import axios from '../../utils/axios';
import { useQuery } from 'react-query';

const Videos = () => {
    // integration of react-query hook to fetch user details
    const { data } = useQuery('user', () => axios.get('/user?email=mjaumi2864@gmail.com'));

    // rendering videos page here
    return (
        <>
            <Navbar />
            <div className={`container ${styles.ed_tech_video_player}`}>
                <VideoPlayerFrame user={data?.data} />
                <Playlist user={data?.data} />
            </div>
        </>
    );
};

export default Videos;