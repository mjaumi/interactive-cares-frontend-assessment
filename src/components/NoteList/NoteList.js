import React, { useState } from 'react';
import styles from './noteList.module.scss';
import { MdAddTask } from 'react-icons/md';
import NoteListItem from '../NoteListItem/NoteListItem';
import axios from '../../utils/axios';
import { useMutation, useQueryClient } from 'react-query';

const NoteList = ({ isVideoPaused, timestamp, seekToTimeStamp, noteList, videoId }) => {
    // integration of react hooks here
    const [noteText, setNoteText] = useState('');

    // integration of react-query hooks here
    const queryClient = useQueryClient();

    // integration of react-query hooks for adding new note
    const noteMutation = useMutation(noteData => {
        return axios.patch('/notes?email=mjaumi2864@gmail.com', noteData);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        }
    });

    // handler function to handle add new note into the database
    const addNewNoteHandler = async (e) => {
        e.preventDefault();

        const noteData = {
            video_id: videoId,
            note: noteText,
            timestamp,
        };

        noteMutation.mutate(noteData);

        // resetting the note text input
        setNoteText('');
    }

    // rendering note list component here
    return (
        <div className={styles.ed_tech_note_list_container}>
            <div className={`${isVideoPaused ? 'block' : 'hidden'}`}>
                <h3>Add New Note</h3>
                <div >
                    <form onSubmit={addNewNoteHandler} className={styles.ed_tech_note_add_form}>
                        <div className={styles.ed_tech_note_time_stamp}>
                            <p>{timestamp}</p>
                            <textarea value={noteText} onChange={e => setNoteText(e.target.value)} cols="30" rows="2" placeholder='Type Your Note...' className='ed-tech-input'></textarea>
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
                    {
                        noteList?.length !== 0 ?
                            noteList?.filter(note => note.video_id === videoId)
                                .map((note, index) => <NoteListItem
                                    key={index}
                                    videoNote={note}
                                    seekToTimeStamp={seekToTimeStamp}
                                />)
                            :
                            <p className={styles.ed_tech_note_not_found}>No Notes For This Video Found. But You Can Add One.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NoteList;