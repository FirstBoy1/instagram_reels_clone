import React, { useState, useRef } from 'react';

import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handleClick = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        onClick={handleClick}
        ref={videoRef}
        className="videoCard__player"
        src={url}
        loop
      ></video>
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default VideoCard;
