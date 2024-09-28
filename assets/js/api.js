'use strict';

const api_key = '1d531bf0395df3cf2af9c091bc217887';
const imageBaseURL = 'https://image.tmdb.org/t/p/';


const fetchDataFromServer = function (url, callback, optionalparam){
    fetch(url)
    .then(response => response.json())
    .then(data=> callback(data, optionalparam));
}

export {imageBaseURL, api_key, fetchDataFromServer};
