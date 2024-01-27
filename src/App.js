import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
const App=()=> {
  return (
   <>
   <div className="app">
    <Navbar/>
   <Banner/>
   <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLarge/>
   <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
   <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
   <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
   <Row title="Top Documentaries" fetchUrl={requests.fetchDocumentaries} />
   </div>
   </>
  );
}

export default App;
