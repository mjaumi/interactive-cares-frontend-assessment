import React from 'react';
import styles from './playerIFrame.module.scss';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import NoteList from '../NoteList/NoteList';

const PlayerIFrame = () => {

    // rendering the video player component here
    return (
        <div className={styles.ed_tech_player_container}>
            <div>
                <iframe src='https://www.youtube.com/embed/GxAYlEK7ZGg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
            </div>
            <div className={styles.ed_tech_player_title_container}>
                <div>
                    <h1>Bangladesh vs Sri Lanka Highlights | 3rd ODI |</h1>
                    <span className='ed-tech-span'>Uploaded on 23 January, 2023</span>
                </div>
                <div className={styles.ed_tech_player_btn_container}>
                    <button className='ed-tech-button ed-tech-button-fixed'>
                        <AiOutlineDoubleLeft size={12} className='mr-10' />
                        Previous
                    </button>
                    <button className='ed-tech-button ed-tech-button-fixed'>
                        Next
                        <AiOutlineDoubleRight size={12} className='ml-10' />
                    </button>
                </div>
            </div>
            <div>
                <NoteList />
            </div>
        </div>
    );
};

export default PlayerIFrame;