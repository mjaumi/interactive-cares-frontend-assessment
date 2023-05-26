import React from 'react';
import styles from './playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const Playlist = () => {

    // rendering the video playlist component here
    return (
        <div className={styles.ed_tech_playlist_container}>
            <div>
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
            </div>
        </div>
    );
};

export default Playlist;