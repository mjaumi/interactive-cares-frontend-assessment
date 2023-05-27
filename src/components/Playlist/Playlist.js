import React from 'react';
import styles from './playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const Playlist = ({ videos }) => {

    // rendering the video playlist component here
    return (
        <div className={styles.ed_tech_playlist_container}>
            <div className={styles.ed_tech_playlist_progress_bar_container}>
                <div className={styles.ed_tech_playlist_progress_bar}>
                    <div style={{ width: '33.33%' }} className={styles.ed_tech_playlist_progress}></div>
                </div>
                <span className='ed-tech-span'>3 / {videos?.length}</span>
            </div>
            <div>
                {
                    videos.map(video => <PlaylistItem
                        key={video.video_id}
                        video={video}
                    />)
                }
            </div>
        </div>
    );
};

export default Playlist;