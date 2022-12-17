import React, { useState } from 'react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore/lite';
import AddDate from './AddDate';
import './Content.css';

const Content = ({ dates, setDates, activePage, setActivePage, db, closePage }) => {
    const [searchValue, setSearchValue] = useState("");

    const checkItem = async (item) => {
        var itemDocument = doc(db, "dates", item.id);

        try {
            await updateDoc(itemDocument, { isCompleted: true, completedOn: Date.now()});
        } catch (error) {
            console.log('Error', error);
        }

        const datesCollection = collection(db,'dates');
        const documents = await getDocs(datesCollection);
        const docData = documents.docs.map(doc => ({
          data: doc.data(),
          id: doc.id
        }));
        setDates(docData);
    }

    const unCheckItem = async (item) => {
        var itemDocument = doc(db, "dates", item.id);

        try {
            await updateDoc(itemDocument, { isCompleted: false });
        } catch (error) {
            console.log('Error', error);
        }

        const datesCollection = collection(db,'dates');
        const documents = await getDocs(datesCollection);
        const docData = documents.docs.map(doc => ({
          data: doc.data(),
          id: doc.id
        }));
        setDates(docData);
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
            case 'past':
                return 'checklist';
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
            case 'past':
                return <img className='contentHeaderIcon' src={require('../assets/past-icon.png')} alt='checklist'/>;
            default:
                return null
        }
    }

    const filterCheckedDates = datesParam => {
        return datesParam.filter(item => {
            return item.data.isCompleted === false;
        })
    }

    const filterOnlyCheckedDates = datesParam => {
        return datesParam.filter(item => {
            return item.data.isCompleted === true;
        })
    }

    const filterList = datesParam => {
        return datesParam.filter(item => {
            return item.data.type === activePage
        })
    }

    const filterListBySearch = datesParam => {
        return datesParam.filter(item => {
            return item.data.title.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    const renderSearchBar = () => {
        if (activePage === 'all')
        {
            return <div className='search-date-wrapper'><input className='add-date-input' type="text" value={searchValue} placeholder='zoek date idee' onChange={e => setSearchValue(e.target.value)} /></div>
        }
    }

    const renderCardBottom = (item) => {
        return <div className='cardBottomWrapper'>
            <div>
                <p>Idee dag: {new Intl.DateTimeFormat('nl-NL').format(item.data.createdOn)}</p>
                {activePage === 'past' ? <p className='completedDateText'>Date dag: {new Intl.DateTimeFormat('nl-NL').format(item.data.completedOn)}</p> : null}
            </div>
            {activePage === 'past' || activePage === 'all' ? 
            <img className='cardBottomImg' src={require(`../assets/${item.data.type}-icon.png`)} alt='check'/>
            : null}
        </div>
    }

    const renderContent = () => {
        var results = [];

        var datesFiltered = dates;

        if (activePage === 'all')
        {
            datesFiltered = filterCheckedDates(datesFiltered);
            datesFiltered = filterListBySearch(datesFiltered);
        }
        else if (activePage === 'past')
        {
            datesFiltered = filterOnlyCheckedDates(datesFiltered);
        }
        else
        {
            datesFiltered = filterCheckedDates(datesFiltered);
            datesFiltered = filterList(datesFiltered);
        }

        datesFiltered.forEach((item, index) => {
            results.push(<li className='dateItem' key={index}>
                <div className='dateItemHeader'>
                    {item.data.isCompleted ? <img onClick={() => unCheckItem(item)} className='checkImgContent' src={require('../assets/checked-icon.png')} alt='check'/> : <img onClick={() => checkItem(item)} className='checkImgContent' src={require('../assets/checked-icon.png')} alt='check'/>}
                    <h2>{item.data.title}</h2>
                </div>
                <div className='dateItemBody'>
                    {renderCardBottom(item)}
                </div>
            </li>)
        });

        if (activePage === 'add')
        {
            return <AddDate setActivePage={setActivePage} setDates={setDates} db={db} />
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
            {renderSearchBar()}
            {renderContent()}
        </ul>
    </div>;
}

export default Content;