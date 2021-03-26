import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
    //console.log(props.synonyms);
    if(props.synonyms) {
        return (
        <ul className="Synonyms"><h6>Synonyms:</h6>
        {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
        })}
        </ul>
        );
    } else {
        return null;
    }
}