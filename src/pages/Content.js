import React from 'react';
import './Content.css';

const Content = ({ activePage, setActivePage }) => {
    const closePage = () => {
        if (activePage !== 'all')
        {
            setActivePage('all');
        }
    }
    
    return <div className='contentWrapper'>
        <p>{activePage}</p>
        <div className={`contentImgWrapper ${activePage === 'all' ? 'hidden' : null}`}
         onClick={() => closePage()} >
            <img className='contentImg' style={{transform: 'rotate(45deg)'}} src={require('../assets/add.png')} alt='close'/>
        </div>
    </div>;
}

export default Content;