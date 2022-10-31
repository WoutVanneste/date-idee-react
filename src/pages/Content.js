import React from 'react';
import AddDate from './AddDate';
import './Content.css';

const Content = ({ dates, activePage, setActivePage, db }) => {
    const closePage = () => {
        if (activePage !== 'all')
        {
            setActivePage('all');
        }
    }

    const renderPageTitle = () => {
        switch (activePage) {
            case 'all':
                return 'date idee';
            case 'home':
                return 'thuis';
            case 'outside':
                return 'samen doen';
            case 'food':
                return 'hapje & drankje';
            case 'movie':
                return 'movie night';
            case 'concert':
                return 'concert';
            case 'travel':
                return 'reizen';
            case 'add':
                return 'nieuw date idee';
            default:
                return 'deze pagina bestaat niet'
        }
    }

    const renderPageIcon = () => {
        switch (activePage) {
            case 'all':
                return <img className='contentHeaderIcon' src={require('../assets/all-icon.png')} alt='date idee'/>;
            case 'home':
                return <img className='contentHeaderIcon' src={require('../assets/home-icon.png')} alt='thuis'/>;
            case 'outside':
                return <img className='contentHeaderIcon' src={require('../assets/outside-icon.png')} alt='samen doen'/>;
            case 'food':
                return <img className='contentHeaderIcon' src={require('../assets/food-icon.png')} alt='hapje & drankje'/>;
            case 'movie':
                return <img className='contentHeaderIcon' src={require('../assets/movie-icon.png')} alt='movie night'/>;
            case 'concert':
                return <img className='contentHeaderIcon' src={require('../assets/concert-icon.png')} alt='concert'/>;
            case 'travel':
                return <img className='contentHeaderIcon' src={require('../assets/travel-icon.png')} alt='reizen'/>;
            case 'add':
                return <img className='contentHeaderIcon' src={require('../assets/add-icon.png')} alt='nieuw date idee'/>;
            default:
                return null
        }
    }

    const filterList = () => {
        return dates.filter(item => {
            return item.type === activePage
        })
    }

    const renderContent = () => {
        var results = [];

        var datesFiltered = dates;

        if (activePage !== 'all'){
            datesFiltered = filterList();
        }
        
        datesFiltered.forEach((item, index) => {
            results.push(<li className='dateItem' key={index}>
                <div className='dateItemHeader'>
                    <h2>{item.title}</h2>
                </div>
                <div className='dateItemBody'>
                    <p>toegevoegd op {new Intl.DateTimeFormat('nl-NL').format(item.createdOn)}</p>
                </div>
            </li>)
        });

        if (activePage === 'add')
        {
            return <AddDate db={db} />
        }
        else
        {
            return results;
        }
    }

    return <div>
        <div className='contentHeaderWrapper'>
            <div className='contentHeaderTitleWrapper'>
                {renderPageIcon()}
                <h1>{renderPageTitle()}</h1>
            </div>
            <div className={`contentImgWrapper ${activePage === 'all' ? 'hidden' : null}`}
            onClick={() => closePage()} >
                <img className='contentImg' style={{transform: 'rotate(45deg)'}} src={require('../assets/add-purple.png')} alt='close'/>
            </div>
        </div>
        <ul className='contentList'>
            {renderContent()}
        </ul>
    </div>;
}

export default Content;