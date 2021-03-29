import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css"

export default function Phonetic(props) {
    //console.log(props.phonetic);
    return (
        <div className="Phonetic">
            {props.phonetic.text}
            <br />
            <ReactAudioPlayer
            src={props.phonetic.audio}
            onPlay
            controls
            />
        </div>
    )
}