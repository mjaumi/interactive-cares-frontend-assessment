import React, { useState } from 'react';
import styles from './noteListItem.module.scss';
import { MdAddTask } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import axios from '../../utils/axios';
import { useMutation, useQueryClient } from 'react-query';

const NoteListItem = ({ seekToTimeStamp, videoNote }) => {
    // destructuring the note object here
    const { _id, note, timestamp } = videoNote || {};

    // integration of react hooks here
    const [toggleEditButton, setToggleEditButton] = useState(false);
    const [noteText, setNoteText] = useState(note);

    // integration of react-query hooks here
    const queryClient = useQueryClient();

    // integration of react-query hook to update note here
    const editNoteMutation = useMutation(({ noteId, noteText }) => {
        return axios.patch(`/update-note?email=mjaumi2864@gmail.com&noteId=${noteId}`, { note: noteText });
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        }
    });

    // integration of react-query hook to delete note here
    const deleteNoteMutation = useMutation(noteId => {
        return axios.patch(`/delete-note?email=mjaumi2864@gmail.com&noteId=${noteId}`);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');
        }
    });

    // handler function to handle edit notes
    const editNoteHandler = async () => {
        setToggleEditButton(!toggleEditButton);

        console.log(noteText);

        if (noteText !== note && noteText !== '') {
            editNoteMutation.mutate({ noteId: _id, noteText });
        }
    }

    // handler function to handle deleting notes
    const deleteNoteHandler = () => {
        deleteNoteMutation.mutate(_id);
    }

    // rendering note list item component here
    return (
        <div className={styles.ed_tech_note_item_container}>
            <div className={styles.ed_tech_note_item_wrapper}>
                <span className={styles.time_stamp}>
                    <p onClick={() => seekToTimeStamp(timestamp)}>{timestamp}</p>
                </span>
                <div className='w-full mr-10'>
                    {
                        toggleEditButton ?
                            <textarea value={noteText} onChange={e => setNoteText(e.target.value)} cols="30" rows="2" placeholder='Type Your Note...' className='ed-tech-input w-full'></textarea>
                            :
                            <p className={styles.note}>{note}</p>
                    }
                </div>
            </div>
            <div className={styles.ed_tech_note_button_container}>
                <button onClick={editNoteHandler} type='button' className={`ed-tech-button ed-tech-icon-button ${toggleEditButton ? 'add' : 'edit'}`}>
                    {
                        toggleEditButton ?
                            <MdAddTask size={20} className='icon' />
                            :
                            <FaRegEdit size={20} className='icon' />
                    }
                </button>
                <button onClick={deleteNoteHandler} type='button' className='ed-tech-button ed-tech-icon-button delete'>
                    <AiTwotoneDelete size={20} className='icon' />
                </button>
            </div>
        </div>
    );
};

export default NoteListItem;