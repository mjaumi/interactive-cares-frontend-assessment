import React from 'react';
import styles from './videoPlayer.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import VideoPlayerFrame from '../../components/VideoPlayerFrame/VideoPlayerFrame';
import Playlist from '../../components/Playlist/Playlist';
import PageTitle from '../../components/PageTitle/PageTitle';

const Videos = () => {
    // rendering videos page here
    return (
        <>
            <Navbar />
            <section className={`container ${styles.ed_tech_video_player}`}>
                <PageTitle title={'Video Player'} />
                <VideoPlayerFrame />
                <Playlist />
            </section>
        </>
    );
};

export default Videos;