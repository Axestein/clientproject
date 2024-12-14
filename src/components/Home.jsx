import React from 'react';
import video from "../assets/video.mp4"; 

const Home = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Home;
