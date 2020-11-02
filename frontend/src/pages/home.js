import React from 'react';

import '../styles/pages/home.css';

import Header from '../components/header';
import Feed from '../components/feed'

function Home() {
    return(
        <>
        <div className='home__content'>
                <Header />
            <section className="home__section">
                <div className="home__feed">
                    
                    <Feed />
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;