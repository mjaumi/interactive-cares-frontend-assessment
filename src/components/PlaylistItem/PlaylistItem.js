import React from 'react';
import styles from './playlistItem.module.scss';
import { BsPlayCircleFill, BsCheckCircleFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

const PlaylistItem = ({ video, isVideoWatched }) => {
    // destructing the video object here
    const { video_id, title, duration } = video || {};

    // integration of react-router-dom hooks here
    const { videoId } = useParams();
    const navigate = useNavigate();

    // this function is navigating to user selected video
    const navigateToVideo = videoId => {
        navigate(`/${videoId}`);
    }

    // rendering playlist item component here
    return (
        <div onClick={() => navigateToVideo(video_id)} className={styles.ed_tech_playlist_item}>
            <div className={`${styles.ed_tech_playlist_item_container} ${parseInt(videoId) === video_id && 'text-ed-tech-blue'}`}>
                <div>
                    {
                        isVideoWatched ?
                            <BsCheckCircleFill className='mt-4 text-ed-tech-green' />
                            :
                            <BsPlayCircleFill className='mt-4' />
                    }
                </div>
                <div>
                    <p>{title}</p>
                    <span className='ed-tech-span'>{duration} Mins</span>
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;