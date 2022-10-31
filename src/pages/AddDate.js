import { collection, addDoc, getDocs } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import './AddDate.css';

const AddDate = ({ db, setDates }) => {
    // add state to check one of the types
    
    useEffect(() => {
        setDatesCollection(collection(db,'dates'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // add state for name
    const [nameInput, setNameInput] = useState('');
    const [type, setType] = useState('');
    const [datesCollection, setDatesCollection] = useState(null);

    const getDates = async () => {
        const documents = await getDocs(datesCollection);
        const docData = documents.docs.map(doc => doc.data());
        setDates(docData);
      }

    const createDate = async () => 
    {
        if (nameInput === '' || type === '')
        {
            return;
        }

        const newItem = {
            title: nameInput,
            type: type,
            createdOn: new Date().getTime(),
            isCompleted: false
          };

        await addDoc(datesCollection, newItem);

        setNameInput('');
        setType('');

        await getDates();
    }

    return <div className='add-date-wrapper'>
        <p className='input-text type'>Date type</p>
       <div className='add-date-type-grid'>
       <div className={`add-date-type ${type === 'home' ? 'active' : 'inactive'}`} onClick={() => setType('home')}>
        <img className='menuImg' src={require('../assets/home-icon.png')} alt='home' />
      </div>
       <div className={`add-date-type ${type === 'outside' ? 'active' : 'inactive'}`} onClick={() => setType('outside')}>
        <img className='menuImg' src={require('../assets/outside-icon.png')} alt='outside' />
      </div>
      <div className={`add-date-type ${type === 'food' ? 'active' : 'inactive'}`} onClick={() => setType('food')}>
        <img className='menuImg' src={require('../assets/food-icon.png')} alt='food' />
      </div>
      <div className={`add-date-type ${type === 'movie' ? 'active' : 'inactive'}`} onClick={() => setType('movie')}>
        <img className='menuImg' src={require('../assets/movie-icon.png')} alt='movie' />
      </div>
      <div className={`add-date-type ${type === 'concert' ? 'active' : 'inactive'}`} onClick={() => setType('concert')}>
        <img className='menuImg' src={require('../assets/concert-icon.png')} alt='concert' />
      </div>
      <div className={`add-date-type ${type === 'travel' ? 'active' : 'inactive'}`} onClick={() => setType('travel')}>
        <img className='menuImg' src={require('../assets/travel-icon.png')} alt='travel' />
      </div>
       </div>
       <p className='input-text title'>Date idee</p>
        <input className='add-date-input' type="text" value={nameInput} placeholder='date idee' onChange={e => setNameInput(e.target.value)} />
        <button disabled={nameInput === '' || type === ''} className='add-date-button' onClick={() => createDate()}>Toevoegen</button>
    </div>;
}

export default AddDate;