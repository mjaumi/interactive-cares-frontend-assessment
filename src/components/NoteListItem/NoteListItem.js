import React, { useState } from 'react';
import styles from './noteListItem.module.scss';
import { FaRegEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdUpdate, MdCancel } from 'react-icons/md';
import axios from '../../utils/axios';
import { useMutation, useQueryClient } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const NoteListItem = ({ seekToTimeStamp, videoNote }) => {
    // destructuring the note object here
    const { _id, note, timestamp } = videoNote || {};

    // integration of react-firebase hooks here
    const [user] = useAuthState(auth);

    // integration of react hooks here
    const [toggleEditButton, setToggleEditButton] = useState(false);
    const [noteText, setNoteText] = useState(note);
    const [isLoading, setIsLoading] = useState(false);

    // integration of react-query hooks here
    const queryClient = useQueryClient();

    // integration of react-query hook to update note here
    const editNoteMutation = useMutation(({ noteId, noteText }) => {
        return axios.patch(`/update-note?email=${user.email}&noteId=${noteId}`, { note: noteText });
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');

            setIsLoading(false);

            toast.success('Note Updated!!', {
                toastId: 'note updated success',
            });
        },
        onError: () => {
            setIsLoading(false);

            toast.error('Note Updating Failed!!', {
                toastId: 'note update fail',
            });
        }
    });

    // integration of react-query hook to delete note here
    const deleteNoteMutation = useMutation(noteId => {
        return axios.patch(`/delete-note?email=${user.email}&noteId=${noteId}`);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('user');

            setIsLoading(false);

            toast.success('Note Deleted!!', {
                toastId: 'note delete success',
            });
        },
        onError: () => {
            setIsLoading(false);

            toast.error('Note Deleting Failed!!', {
                toastId: 'note delete fail',
            });
        }
    });

    // handler function to handle edit notes
    const editNoteHandler = async () => {
        setToggleEditButton(!toggleEditButton);

        if (noteText !== note && noteText !== '' && user) {
            setIsLoading(true);
            editNoteMutation.mutate({ noteId: _id, noteText });
        }
    }

    // handler function to handle deleting notes
    const deleteNoteHandler = () => {
        setIsLoading(true);
        deleteNoteMutation.mutate(_id);
    }

    // rendering note list item component here
    return (
        <>
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
                                noteText === note ?
                                    <MdCancel size={22} className='icon' />
                                    :
                                    <MdUpdate size={22} className='icon' />
                                :
                                <FaRegEdit size={22} className='icon' />
                        }
                    </button>
                    <button onClick={deleteNoteHandler} type='button' className='ed-tech-button ed-tech-icon-button delete'>
                        <AiTwotoneDelete size={22} className='icon' />
                    </button>
                </div>
            </div>
            {
                isLoading && <Loading />
            }
        </>
    );
};

export default NoteListItem;