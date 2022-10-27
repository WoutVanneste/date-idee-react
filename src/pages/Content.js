import React from 'react';
import './Content.css';

const Content = ({ activePage, setActivePage }) => {
    const closePage = () => {
        if (activePage !== 'all')
        {
            setActivePage('all');
        }
    }

    const renderPageTitle = () => {
        switch (activePage) {
            case 'all':
                return '❤️ date idee';
            case 'home':
                return '🏠 thuis';
            case 'outside':
                return '🧑‍🤝‍🧑 dagje uit';
            case 'food':
                return '🍕 hapje & drankje';
            case 'movie':
                return '🍿 movie night';
            case 'concert':
                return '🎶 concert';
            case 'travel':
                return '🛫 reizen';
            case 'add':
                return '💡 nieuw date idee';
            default:
                return 'deze pagina bestaat niet'
        }
    }

    return <div className='contentWrapper'>
        <h1>{renderPageTitle()}</h1>
        <div className={`contentImgWrapper ${activePage === 'all' ? 'hidden' : null}`}
         onClick={() => closePage()} >
            <img className='contentImg' style={{transform: 'rotate(45deg)'}} src={require('../assets/add.png')} alt='close'/>
        </div>
    </div>;
}

export default Content;