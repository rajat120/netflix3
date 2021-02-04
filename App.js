import React from 'react';
import './App.css';
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Request";

function App() {


  return (
    <div className="app">
      <Nav/>
      <Banner/>
    <Row  title="Netflix Original" fetchurl={requests.fetchNetflixOriginal} isLargeRow popularity/>
    <Row  title="Trending" fetchurl={requests.fetchTrending} popularity/>
    <Row  title="Action Movies" fetchurl={requests.fetchActionMovies} popularity/>
    <Row  title="Comedy Movies" fetchurl={requests.fetchComedyMovies} popularity/>
    <Row  title="Horror Movies" fetchurl={requests.fetchHorrorMovies} popularity/>
    <Row  title="Documentries" fetchurl={requests.fetchDocumentaries} popularity/>
    <Row  title="Romantic Movies" fetchurl={requests.fetchRomanticMovies} popularity/>
    <Row  title="Top Rated"  fetchurl={requests.fetchTopRated} popularity/>


    </div>
  );
}

export default App;
