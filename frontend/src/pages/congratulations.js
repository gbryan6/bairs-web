import React from 'react';

import Capelo from '../images/capelo.svg';

function congratulations() {
    return (
        <div className="congratulations__all">
            <div className="congratulations">
                <h1>Parabéns !</h1>
                <img src={Capelo} alt="Capelo" />
                <p>Agora você faz parte do BAIRS</p>
            </div>
        </div>
    )
}

export default congratulations;