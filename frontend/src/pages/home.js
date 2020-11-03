import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/pages/home.css';

import Header from '../components/header';
import Feed from '../components/feed';
import Banner from '../components/banner';

function Home() {
    return(
        <div className="all__content">
        <div className='home__content'>
                <Header />
            <section className="home__section">
                <div className="home__feed">
                    <Banner/>
                    <Feed />
                </div>
            </section>
        </div>
        </div>
    )
}

export default Home;