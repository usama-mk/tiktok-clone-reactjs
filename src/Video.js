import './Video.css';

import React, { useRef, useState } from 'react'

function Video() {
    const [playing, setPlaying]= useState(false);
    const videoRef= useRef(null);

    const handleVideoPress= ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video" >
            <video
            className="video__player"
            onClick= {handleVideoPress}
            ref= {videoRef}
            // controls 
            poster="https://images.unsplash.com/photo-1615266508026-874e2c021320?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=300"
            loop  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" ></video>
            {/* <iframe width="900" height="506" src="https://www.youtube.com/embed/QFUT1hKfSVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* VideoFooter */} 
            {/* VideoSidebar */}
        </div>
    )
}

 
export default Video
