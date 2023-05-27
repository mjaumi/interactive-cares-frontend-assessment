import React from 'react';
import styles from './playlist.module.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import { useQuery } from 'react-query';
import axios from '../../utils/axios';

const Playlist = () => {
    // integration of custom hooks here
    const { watchedVideos } = useGetUserInfo();

    // integration of react-query hooks to fetch all the videos here
    const { data } = useQuery('videos', () => axios.get('/videos'));

    // calculating the progress bar value here 
    const progressValue = (watchedVideos?.length / data?.data.length) * 100 + '%';

    // rendering the video playlist component here
    return (
        <div className={styles.ed_tech_playlist_container}>
            <div className={styles.ed_tech_playlist_progress_bar_container}>
                <div className={styles.ed_tech_playlist_progress_bar}>
                    <div style={{ width: progressValue }} className={styles.ed_tech_playlist_progress}></div>
                </div>
                <span className='ed-tech-span'>{watchedVideos?.length} / {data?.data.length}</span>
            </div>
            <div>
                {
                    data?.data.map(video => <PlaylistItem
                        key={video.video_id}
                        video={video}
                        isVideoWatched={watchedVideos?.includes(video.video_id)}
                    />)
                }
            </div>
        </div>
    );
};

export default Playlist;