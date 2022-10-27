import './App.css';
import NavigationMenu from './pages/NavigationMenu';
import Content from './pages/Content';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('');
  
  return (
    <div>
      <NavigationMenu setActivePage={setActivePage} />
      <Content />
    </div>
  );
}

export default App;
