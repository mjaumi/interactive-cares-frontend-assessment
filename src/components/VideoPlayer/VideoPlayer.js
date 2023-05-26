import React from 'react';
import styles from './videoPlayer.module.scss';
import PlayerIFrame from '../PlayerIFrame/PlayerIFrame';
import Playlist from '../Playlist/Playlist';

const VideoPlayer = () => {

    // rendering the video player component here
    return (
        <div className={`container ${styles.ed_tech_video_player}`}>
            <PlayerIFrame />
            <Playlist />
        </div>
    );
};

export default VideoPlayer;