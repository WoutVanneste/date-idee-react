import React from 'react';
import './Content.css';

const Content = ({ dates, activePage, setActivePage }) => {
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

    const filterList = () => {
        return dates.filter(item => {
            return item.type == activePage
        })
    }

    const renderContent = () => {
        var results = [];

        var datesFiltered = dates;

        if (activePage !== 'all' && activePage !== 'add'){
            datesFiltered = filterList();
        }
        
        datesFiltered.forEach((item, index) => {
            results.push(<li className='dateItem' key={index}>
                <div className='dateItemHeader'>
                    <h2>{item.title}</h2>
                    <div>{item.isCompleted ? '✔️' : '❌'}</div>
                </div>
                <div className='dateItemBody'>
                    <p>toegevoegd op {new Date(item.createdOn).toLocaleDateString().toString()}</p>
                </div>
            </li>)
        });

        return results;
    }

    return <div>
        <div className='contentHeaderWrapper'>
            <h1>{renderPageTitle()}</h1>
            <div className={`contentImgWrapper ${activePage === 'all' ? 'hidden' : null}`}
            onClick={() => closePage()} >
                <img className='contentImg' style={{transform: 'rotate(45deg)'}} src={require('../assets/add.png')} alt='close'/>
            </div>
        </div>
        <ul className='contentList'>
            {renderContent()}
        </ul>
    </div>;
}

export default Content;