import React from 'react';
import './NavigationMenu.css';

const NavigationMenu = ({ 
  pop, 
  setPop, 
  setActivePage,
  yPosHome,
  setYPosHome,
  yPosOutside,
  setYPosOutside,
  yPosFood,
  setYPosFood,
  yPosMovie,
  setYPosMovie,
  yPosConcert,
  setYPosConcert,
  yPosTravel,
  setYPosTravel,
  xPosAdd,
  setXPosAdd,
  xPosPast,
  setXPosPast,
  beginValue }) => {
    const popIn = () => {
        var offset = 70;
        setPop(true);
        setYPosHome(offset * 1);
        setYPosOutside(offset * 2);
        setYPosFood(offset * 3);
        setYPosMovie(offset * 4);
        setYPosConcert(offset * 5);
        setYPosTravel(offset * 6);
        setXPosAdd(offset * 1);
        setXPosPast(offset * 2);
    }

    const popOut = () => {
        setPop(false);
        setYPosHome(beginValue);
        setYPosOutside(beginValue);
        setYPosFood(beginValue);
        setYPosMovie(beginValue);
        setYPosConcert(beginValue);
        setYPosTravel(beginValue);
        setXPosAdd(beginValue);
        setXPosPast(beginValue);
    }

    const goToPage = pageName => {
        if (pop)
        {
            setActivePage(pageName);
            setTimeout(() => {
                popOut();
            }, 100);
        }
    }

    return <div className='navigationMenu' pointerEvents='box-none'>
      <div style={{transform: `translateY(-${yPosHome}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('home')}>
        <img className='menuImg' src={require('../assets/home-icon.png')} alt='home' />
      </div>
      <div style={{transform: `translateY(-${yPosOutside}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('outside')}>
        <img className='menuImg' src={require('../assets/outside-icon.png')} alt='outside' />
      </div>
      <div style={{transform: `translateY(-${yPosFood}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('food')}>
        <img className='menuImg' src={require('../assets/food-icon.png')} alt='food' />
      </div>
      <div style={{transform: `translateY(-${yPosMovie}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('movie')}>
        <img className='menuImg' src={require('../assets/movie-icon.png')} alt='movie' />
      </div>
      <div style={{transform: `translateY(-${yPosConcert}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('concert')}>
        <img className='menuImg' src={require('../assets/concert-icon.png')} alt='concert' />
      </div>
      <div style={{transform: `translateY(-${yPosTravel}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('travel')}>
        <img className='menuImg' src={require('../assets/travel-icon.png')} alt='travel' />
      </div>
      <div style={{transform: `translateX(-${xPosAdd}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('add')}>
        <img className='menuImg menuImgSmall' src={require('../assets/add-icon.png')} alt='add' />
      </div>
      <div style={{transform: `translateX(-${xPosPast}px)`}} className={`menuImgWrapper menuImgWrapperButton ${pop ? 'menuButton' : null}`} onClick={() => goToPage('past')}>
        <img className='menuImg menuImgSmall' src={require('../assets/past-icon.png')} alt='past' />
      </div>
      <div className='menuImgWrapper menuButton'
      style={pop ? { transform: `rotate(-90deg)`} : {transform: `rotate(0deg)`}}
      onClick={() => {
        pop === false ? popIn() : popOut();
      }}>
       <img className='menuImg menuImgSmall' src={require('../assets/menu.png')} alt='menu' />
    </div>
  </div>;
}

export default NavigationMenu;