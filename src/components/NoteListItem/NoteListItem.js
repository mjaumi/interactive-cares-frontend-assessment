import React from 'react';
import styles from './noteListItem.module.scss';
import { FaRegEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';

const NoteListItem = () => {

    // rendering note list item component here
    return (
        <div className={styles.ed_tech_note_item_container}>
            <div className={styles.ed_tech_note_item_wrapper}>
                <span className={styles.time_stamp}>10:53</span>
                <p className={styles.note}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum voluptate esse provident unde quis sapiente perspiciatis ducimus repellendus necessitatibus rerum, minima inventore quas officia alias debitis reprehenderit non quos.</p>
            </div>
            <div className={styles.ed_tech_note_button_container}>
                <button type='button' className='ed-tech-button ed-tech-icon-button edit'>
                    <FaRegEdit size={30} className='icon' />
                </button>
                <button type='button' className='ed-tech-button ed-tech-icon-button delete'>
                    <AiTwotoneDelete size={30} className='icon' />
                </button>
            </div>
        </div>
    );
};

export default NoteListItem;