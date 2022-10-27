import React, { useState } from 'react';
import './NavigationMenu.css';

const NavigationMenu = ({ setActivePage }) => {
    
    const [pop, setPop] = useState(false);
    const [yPosHome, setYPosHome] = useState(0);
    const [yPosOutside, setYPosOutside] = useState(0);
    const [yPosFood, setYPosFood] = useState(0);
    const [yPosMovie, setYPosMovie] = useState(0);
    const [yPosConcert, setYPosConcert] = useState(0);
    const [yPosTravel, setYPosTravel] = useState(0);
    const [xPosAdd, setXPosAdd] = useState(0);

    const popIn = () => {
        var offset = 60;
        setPop(true);
        setYPosHome(offset * 1);
        setYPosOutside(offset * 2);
        setYPosFood(offset * 3);
        setYPosMovie(offset * 4);
        setYPosConcert(offset * 5);
        setYPosTravel(offset * 6);
        setXPosAdd(offset);
    }

    const popOut = () => {
        setPop(false);
        setYPosHome(0);
        setYPosOutside(0);
        setYPosFood(0);
        setYPosMovie(0);
        setYPosConcert(0);
        setYPosTravel(0);
        setXPosAdd(0);
    }

    const goToPage = pageName => {
        console.log('go to page', pageName);
        if (pop) {
            setActivePage(pageName);
            setTimeout(() => {
                popOut();
            }, 100);
        }
    }

    return <div className='navigationMenu' pointerEvents='box-none'>
      <div style={{transform: `translateY(-${yPosHome}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('home')}>
        <img className='menuImg' src={require('../assets/home.png')} alt='home' />
      </div>
      <div style={{transform: `translateY(-${yPosOutside}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('outside')}>
        <img className='menuImg' src={require('../assets/outside.png')} alt='outside' />
      </div>
      <div style={{transform: `translateY(-${yPosFood}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('food')}>
        <img className='menuImg' src={require('../assets/food.png')} alt='food' />
      </div>
      <div style={{transform: `translateY(-${yPosMovie}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('movie')}>
        <img className='menuImg' src={require('../assets/movie.png')} alt='movie' />
      </div>
      <div style={{transform: `translateY(-${yPosConcert}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('concert')}>
        <img className='menuImg' src={require('../assets/concert.png')} alt='concert' />
      </div>
      <div style={{transform: `translateY(-${yPosTravel}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('travel')}>
        <img className='menuImg' src={require('../assets/travel.png')} alt='travel' />
      </div>
      <div style={{transform: `translateX(-${xPosAdd}px)`}} className='menuImgWrapper menuImgWrapperButton' onClick={() => goToPage('add')}>
        <img className='menuImg menuImgSmall' src={require('../assets/add.png')} alt='add' />
      </div>
      <div className='menuImgWrapper'
      style={pop ? { transform: `rotate(-90deg)`} : {transform: `rotate(0deg)`}}
      onClick={() => {
        pop === false ? popIn() : popOut();
      }}>
       <img className='menuImg menuImgSmall' src={require('../assets/menu.png')} alt='menu' />
    </div>
  </div>;
}

export default NavigationMenu;