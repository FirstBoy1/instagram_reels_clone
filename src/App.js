import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard
          channel="alskdjf"
          avatarSrc=""
          song="Random song title"
          url="https://v16m.tiktokcdn.com/7fc67357368466e17ae79a9482c57417/5f58e29f/video/tos/useast2a/tos-useast2a-ve-0068c001/0b684a11928543e3b01192faae201a9c/?a=1233&br=4046&bt=2023&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090908104401023410604549021680&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2g3bnNucnA5dTMzMzczM0ApNzZoNmU4aTxkN2k3NDg7ZmdmZjBeMi5lXmlfLS1iMTZzczM0YTJeM2BhLWBjMS0wXjM6Yw%3D%3D&vl=&vr="
          likes={1.2}
          shares={99}
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}
      </div>
    </div>
  );
}

export default App;
