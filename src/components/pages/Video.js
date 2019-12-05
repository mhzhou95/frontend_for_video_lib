import React from 'react';

const Video = (props) => {
    return(
    <div>
        <iframe 
            title={props.props.title}
            src={props.props.src}
            allowFullScreen ={props.props.allowFullScreen}
            allow = {props.props.allow}
            frameBorder = {props.props.frameBorder}
            width ={props.props.width}
            height = {props.props.height}
            >
        </iframe>
    </div>
 )
};

export default Video;