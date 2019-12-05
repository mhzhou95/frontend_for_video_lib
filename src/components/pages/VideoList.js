import React from 'react';
import Video from './Video';

const VideoList = () => {
    const state = {
        width:"560",
        height:"315",
        src:"https://www.youtube.com/embed/ohUijzak114",
        frameborder:"0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
    }
    return (
       <Video props = {state} />
    );
}

export default VideoList;
