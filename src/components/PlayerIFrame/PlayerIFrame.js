import React, { useRef, useState } from 'react';
import styles from './playerIFrame.module.scss';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import NoteList from '../NoteList/NoteList';
import ReactPlayer from 'react-player';

const PlayerIFrame = () => {
    // integration of react hooks here
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const [timeStamp, setTimeStamp] = useState('');
    const videoRef = useRef();

    // this function is checking if the video is playing or paused
    const videoPlayPauseChecker = videoState => {
        setIsVideoPaused(videoState);
    }

    // this function is returning the current progress time in minutes
    const getCurrentTimeInMinutes = () => {
        const seconds = Math.floor(videoRef.current.getCurrentTime());
        let minutes = seconds > 60 ? Math.floor(seconds / 60) : 0;
        let leftSeconds = seconds % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        leftSeconds = leftSeconds < 10 ? '0' + leftSeconds : leftSeconds;

        setTimeStamp(minutes + ':' + leftSeconds);
    }

    // this function is seeking the current video to the desired timestamp
    const seekToTimeStamp = timeStampString => {
        const [minutes, seconds] = timeStampString.split(':');

        const totalSeconds = (Number(minutes) * 60) + Number(seconds);

        videoRef.current.seekTo(totalSeconds, 'seconds');
    }

    // rendering the video player component here
    return (
        <div className={styles.ed_tech_player_container}>
            <div>
                <ReactPlayer ref={videoRef} className={styles.ed_tech_video_player} controls url='https://www.youtube.com/embed/GxAYlEK7ZGg' onPlay={() => videoPlayPauseChecker(false)} onPause={() => videoPlayPauseChecker(true)} onProgress={getCurrentTimeInMinutes} />
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
                <NoteList
                    isVideoPaused={isVideoPaused}
                    timeStamp={timeStamp}
                    seekToTimeStamp={seekToTimeStamp}
                />
            </div>
        </div>
    );
};

export default PlayerIFrame;