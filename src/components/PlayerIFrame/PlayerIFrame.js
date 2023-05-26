import React from 'react';
import styles from './playerIFrame.module.scss';
import { IconContext } from 'react-icons';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

const PlayerIFrame = () => {

    // rendering the video player component here
    return (
        <div className={styles.ed_tech_player_container}>
            <iframe src='https://www.youtube.com/embed/GxAYlEK7ZGg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
            <div className={styles.ed_tech_player_title_container}>
                <div>
                    <h1>Bangladesh vs Sri Lanka Highlights | 3rd ODI |</h1>
                    <span className='ed-tech-span'>Uploaded on 23 January, 2023</span>
                </div>
                <div className={styles.ed_tech_player_btn_container}>
                    <button className='ed-tech-button ed-tech-button-fixed'>
                        <IconContext.Provider value={{ className: 'mr-10 v-align-middle' }}>
                            <div>
                                <AiOutlineDoubleLeft />
                            </div>
                        </IconContext.Provider>
                        Previous
                    </button>
                    <button className='ed-tech-button ed-tech-button-fixed'>
                        <span className='v-align-middle'>Next</span>
                        <IconContext.Provider value={{ className: 'ml-10 v-align-middle' }}>
                            <div>
                                <AiOutlineDoubleRight />
                            </div>
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerIFrame;