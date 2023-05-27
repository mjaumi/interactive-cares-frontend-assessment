import React from 'react';
import styles from './playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const Playlist = ({ videos, user }) => {
    // destructuring the user object here
    const { watched_videos } = user || {};

    // calculating the progress bar value here 
    const progressValue = (watched_videos?.length / videos?.length) * 100 + '%';

    // rendering the video playlist component here
    return (
        <div className={styles.ed_tech_playlist_container}>
            <div className={styles.ed_tech_playlist_progress_bar_container}>
                <div className={styles.ed_tech_playlist_progress_bar}>
                    <div style={{ width: progressValue }} className={styles.ed_tech_playlist_progress}></div>
                </div>
                <span className='ed-tech-span'>{watched_videos?.length} / {videos?.length}</span>
            </div>
            <div>
                {
                    videos.map(video => <PlaylistItem
                        key={video.video_id}
                        video={video}
                        isVideoWatched={watched_videos?.includes(video.video_id)}
                    />)
                }
            </div>
        </div>
    );
};

export default Playlist;