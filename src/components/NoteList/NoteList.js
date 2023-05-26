import React from 'react';
import styles from './noteList.module.scss';
import { MdAddTask } from 'react-icons/md';
import NoteListItem from '../NoteListItem/NoteListItem';

const NoteList = ({ isVideoPaused, timeStamp, seekToTimeStamp }) => {
    // rendering note list component here
    return (
        <div className={styles.ed_tech_note_list_container}>
            <div className={`${isVideoPaused ? 'block' : 'hidden'}`}>
                <h3>Add New Note</h3>
                <div >
                    <form className={styles.ed_tech_note_add_form}>
                        <div className={styles.ed_tech_note_time_stamp}>
                            <p>{timeStamp}</p>
                            <textarea name="" id="" cols="30" rows="2" placeholder='Type Your Note...' className='ed-tech-input'></textarea>
                        </div>
                        <button type='submit' className='ed-tech-button ed-tech-icon-button add mr-10'>
                            <MdAddTask size={30} />
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <h3>Exiting Notes For This Video</h3>
                <div>
                    <NoteListItem seekToTimeStamp={seekToTimeStamp} />
                    <NoteListItem seekToTimeStamp={seekToTimeStamp} />
                    <NoteListItem seekToTimeStamp={seekToTimeStamp} />
                </div>
            </div>
        </div>
    );
};

export default NoteList;