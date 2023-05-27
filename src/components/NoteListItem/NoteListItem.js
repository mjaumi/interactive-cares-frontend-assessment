import React from 'react';
import styles from './noteListItem.module.scss';
import { FaRegEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';

const NoteListItem = ({ seekToTimeStamp, videoNote }) => {
    // destructuring the note object here
    const { note, timestamp } = videoNote || {};

    // rendering note list item component here
    return (
        <div className={styles.ed_tech_note_item_container}>
            <div className={styles.ed_tech_note_item_wrapper}>
                <span className={styles.time_stamp}>
                    <p onClick={() => seekToTimeStamp(timestamp)}>{timestamp}</p>
                </span>
                <p className={styles.note}>{note}</p>
            </div>
            <div className={styles.ed_tech_note_button_container}>
                <button type='button' className='ed-tech-button ed-tech-icon-button edit'>
                    <FaRegEdit size={20} className='icon' />
                </button>
                <button type='button' className='ed-tech-button ed-tech-icon-button delete'>
                    <AiTwotoneDelete size={20} className='icon' />
                </button>
            </div>
        </div>
    );
};

export default NoteListItem;