import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        //console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        //console.log(response);
        setPhotos(response.data[0]);
    }

    function search (event) {
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
    }
        //documentation: https://www.pexels.com/api/documentation/
        let pexelsApiKey = "563492ad6f91700001000001439b950cda554010b63a13c1ea4c01d5";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization : `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <input type="search" placeholder="Search" onChange={handleKeywordChange} />
            </form>
            <div className="hint">Suggested words: Advocate, Aesthetic, Agitate, Ambitious...</div>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
        )
}