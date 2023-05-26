import React from 'react';
import styles from './playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const Playlist = () => {

    // rendering the video playlist component here
    return (
        <div className={styles.ed_tech_playlist_container}>
            <div className={styles.ed_tech_playlist_progress_bar_container}>
                <div className={styles.ed_tech_playlist_progress_bar}>
                    <div style={{ width: '33.33%' }} className={styles.ed_tech_playlist_progress}></div>
                </div>
                <span className='ed-tech-span'>3 / 10</span>
            </div>
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