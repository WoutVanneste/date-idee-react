import './App.css';
import NavigationMenu from './pages/NavigationMenu';
import Content from './pages/Content';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('all');

  return (
    <div className='wrapper'>
      <NavigationMenu setActivePage={setActivePage} />
      <Content setActivePage={setActivePage} activePage={activePage} />
    </div>
  );
}

export default App;
