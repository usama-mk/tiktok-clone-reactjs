import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios.js';

function App() {
  const [videos, setVideos]= useState([]);

  useEffect(()=>{
    
  async function fetchPosts(){
    const response= await axios.get("/v2/posts");
    setVideos(response.data);
    console.log(response.data);
    return response;
  }

  fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
      {videos.map((video)=>{
       return (
        <Video
        url={video.url}
        channel={video.channel}
        song={video.song}
        likes={video.likes}
        messages={video.messages}
        description={video.description}
        shares={video.shares}
        />
       );
     })}
     
      </div>
    </div>
  );
}

export default App;
