import React from 'react';

import '../styles/pages/home.css';

import Header from '../components/header';

function Home() {
    return(
        <>
        <div className='home__content'>
            <header className='top__bar'>
                <Header />
            </header>
            <section>
                Aqui vai ficar o feed
            </section>
        </div>
        </>
    )
}

export default Home;