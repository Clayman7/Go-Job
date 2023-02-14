import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import img from '../'
import './Home.css';

const Home = () => {
return(
    <div className='home'>
        <img src='img' alt='img home' className='img'/>
      <h1 className="title">Trabajadores con experiencia y referencia</h1>
      <h2 className="title_two">Desarrolla tu oficio cerca de ti</h2>
      <SearchBar/>
    </div>
)
}

export default Home;