import './App.css';
import NavigationMenu from './pages/NavigationMenu';
import Content from './pages/Content';
import { useState } from 'react';

function App() {
  
const dateIdeetjes = [
  {
    id: 11,
    title: "knus in de zetel",
    type: 'home',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 12,
    title: "maskertje doen",
    type: 'home',
    isCompleted: true,
    createdOn: new Date().getTime()
  },
  {
    id: 21,
    title: "poke bowl",
    type: 'food',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 31,
    title: "Suzan en Freek",
    type: 'concert',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 41,
    title: "Cars 3",
    type: 'movie',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 51,
    title: "Weekendje met de fam",
    type: 'travel',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 61,
    title: "Ikea date",
    type: 'outside',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 11,
    title: "knus in de zetel",
    type: 'home',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 12,
    title: "maskertje doen",
    type: 'home',
    isCompleted: true,
    createdOn: new Date().getTime()
  },
  {
    id: 21,
    title: "poke bowl",
    type: 'food',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 31,
    title: "Suzan en Freek",
    type: 'concert',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 41,
    title: "Cars 3",
    type: 'movie',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 51,
    title: "Weekendje met de fam",
    type: 'travel',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 61,
    title: "Ikea date",
    type: 'outside',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 11,
    title: "knus in de zetel",
    type: 'home',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 12,
    title: "maskertje doen",
    type: 'home',
    isCompleted: true,
    createdOn: new Date().getTime()
  },
  {
    id: 21,
    title: "poke bowl",
    type: 'food',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 31,
    title: "Suzan en Freek",
    type: 'concert',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 41,
    title: "Cars 3",
    type: 'movie',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 51,
    title: "Weekendje met de fam",
    type: 'travel',
    isCompleted: false,
    createdOn: new Date().getTime()
  },
  {
    id: 61,
    title: "Ikea date",
    type: 'outside',
    isCompleted: false,
    createdOn: new Date().getTime()
  }
]
  const [activePage, setActivePage] = useState('all');
  const [dates, setDates] = useState(dateIdeetjes);

  return (
    <div className='wrapper'>
      <NavigationMenu setActivePage={setActivePage} />
      <Content
        setActivePage={setActivePage}
        activePage={activePage}
        dates={dates} 
        setDates={setDates} />
    </div>
  );
}

export default App;
