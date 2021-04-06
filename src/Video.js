import './Video.css';

import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, description, messages, song, channel, shares, likes}) {
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
            loop  src={url} ></video>
            {/* <iframe width="900" height="506" src="https://www.youtube.com/embed/QFUT1hKfSVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
            
            {/* VideoFooter */}
            <VideoFooter channel={channel} description={description} song={song} /> 
            {/* VideoSidebar */}
            <VideoSidebar shares={shares} likes={likes} comments={messages} />
        </div>
    )
}

 
export default Video
