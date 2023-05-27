import React, { useEffect, useRef, useState } from 'react';
import styles from './videoPlayerFrame.module.scss';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import NoteList from '../NoteList/NoteList';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../utils/axios';

const VideoPlayerFrame = () => {
    // integration of react-router-dom hooks here
    const { videoId } = useParams();
    const navigate = useNavigate();

    // integration of react hooks here
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const [disablePrevBtn, setDisablePrevBtn] = useState(false);
    const [disableNextBtn, setDisableNextBtn] = useState(false);
    const [timeStamp, setTimeStamp] = useState('');
    const [video, setVideo] = useState({});
    const videoRef = useRef();

    // destructuring the video object here
    const { video_id, url, title, upload_date } = video || {};

    // fetching single video by video id here
    useEffect(() => {
        const getVideo = async (videoId) => {
            const { data } = await axios.get(`/video/${videoId}`);

            videoId < 10 ? setDisableNextBtn(false) : setDisableNextBtn(true);
            videoId > 1 ? setDisablePrevBtn(false) : setDisablePrevBtn(true);

            setVideo(data);
        }

        getVideo(videoId);
    }, [videoId]);

    // this function is checking if the video is playing or paused
    const videoPlayPauseChecker = videoState => {
        setIsVideoPaused(videoState);
    }

    // handler function to handle next or previous video jumping feature
    const jumpToVideoHandler = (videoId, nextOrPrev) => {
        nextOrPrev === 'next' ? navigate(`/${videoId + 1}`) : navigate(`/${videoId - 1}`);
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
                <ReactPlayer ref={videoRef} className={styles.ed_tech_video_player} controls url={url} onPlay={() => videoPlayPauseChecker(false)} onPause={() => videoPlayPauseChecker(true)} onProgress={getCurrentTimeInMinutes} />
            </div>
            <div className={styles.ed_tech_player_title_container}>
                <div>
                    <h1>{title}</h1>
                    <span className='ed-tech-span'>Uploaded on {upload_date}</span>
                </div>
                <div className={styles.ed_tech_player_btn_container}>
                    <button onClick={() => jumpToVideoHandler(video_id, 'prev')} className='ed-tech-button ed-tech-button-fixed' disabled={disablePrevBtn}>
                        <AiOutlineDoubleLeft size={12} className='mr-10' />
                        Previous
                    </button>
                    <button onClick={() => jumpToVideoHandler(video_id, 'next')} className='ed-tech-button ed-tech-button-fixed' disabled={disableNextBtn}>
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

export default VideoPlayerFrame;