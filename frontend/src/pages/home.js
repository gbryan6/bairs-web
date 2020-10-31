import React from 'react';

import '../styles/pages/home.css';

import Header from '../components/header';

function Home() {
    return(
        <>
        <div className='home__content'>
                <Header />
            <section className="home__section">
                <div className="home__feed">
                    <h1>aqui vai ficar o feed</h1>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;