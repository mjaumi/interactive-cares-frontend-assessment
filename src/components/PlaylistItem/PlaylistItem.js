import React from 'react';
import styles from './playlistItem.module.scss';
import { BsPlayCircleFill } from 'react-icons/bs';

const PlaylistItem = ({ video }) => {
    // destructing the video object here
    const { title, duration } = video || {};

    // rendering playlist item component here
    return (
        <div className={styles.ed_tech_playlist_item}>
            <div className={styles.ed_tech_playlist_item_container}>
                <div>
                    <BsPlayCircleFill className='mt-4' />
                </div>
                <div>
                    <p>{title}</p>
                    <span className='ed-tech-span'>{duration} Mins</span>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;