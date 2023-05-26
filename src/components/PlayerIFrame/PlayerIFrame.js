import React, { useState } from 'react';
import styles from './playerIFrame.module.scss';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import NoteList from '../NoteList/NoteList';
import ReactPlayer from 'react-player';

const PlayerIFrame = () => {
    // integration of react hooks here
    const [isVideoPaused, setIsVideoPaused] = useState(false);

    // this function is checking if the video is playing or paused
    const videoPlayPauseChecker = state => {
        setIsVideoPaused(state);
    }

    // rendering the video player component here
    return (
        <div className={styles.ed_tech_player_container}>
            <div>
                <ReactPlayer className={styles.ed_tech_video_player} controls url='https://www.youtube.com/embed/GxAYlEK7ZGg' onPlay={() => videoPlayPauseChecker(false)} onPause={() => videoPlayPauseChecker(true)} />
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
                <NoteList isVideoPaused={isVideoPaused} />
            </div>
        </div>
    );
};

export default PlayerIFrame;