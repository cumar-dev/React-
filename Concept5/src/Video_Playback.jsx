import React, { useRef } from 'react'

const Video_Playback = () => {
    const videoRef = useRef(null);
    const playVideo = ()=> videoRef.current.play();
    const pauseVideo = ()=> videoRef.current.pause();
  return (
    <>
    <video ref={videoRef} style={{width: "200px", marginTop: "20px"}}>
        <source src='./video/AdobeStock_92730537_Video_HD_Preview.mov' type="video/mp4" />
    </video> <br />
    <button onClick={playVideo}>play</button>
    <button onClick={pauseVideo}>pause</button>
    </>
  )
}

export default Video_Playback;