import React from 'react';
import styles from './playlistItem.module.scss';
import { BsPlayCircleFill } from 'react-icons/bs';

const PlaylistItem = () => {

    // rendering playlist item component here
    return (
        <div className={styles.ed_tech_playlist_item}>
            <div className={styles.ed_tech_playlist_item_container}>
                <div>
                    <BsPlayCircleFill className='mt-4' />
                </div>
                <div>
                    <p>Bangladesh vs Sri Lanka Highlights | 3rd ODI | Tri-Nation Series 2018</p>
                    <span>5:30 Mins</span>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;