import './App.css';
import NavigationMenu from './pages/NavigationMenu';
import Content from './pages/Content';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Hearts } from 'react-loader-spinner'

const firebaseConfig = {
  apiKey: "AIzaSyBPE3y-QXWb_ZV9RHryDtcBO7Zp-W1xgYY",
  authDomain: "date-idee-ffa71.firebaseapp.com",
  databaseURL: "https://date-idee-ffa71-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "date-idee-ffa71",
  storageBucket: "date-idee-ffa71.appspot.com",
  messagingSenderId: "515131659726",
  appId: "1:515131659726:web:2f56fc5a05778eec1cc79f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  const [loading, setLoading] = useState(true);

  const getDates = async (db) => {
    const datesCollection = collection(db,'dates');
    const documents = await getDocs(datesCollection);
    const docData = documents.docs.map(doc => doc.data());
    setDates(docData);
  }
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try
      {
          await getDates(db);
          setLoading(false);
      }
      catch (e)
      {
        console.log('Error', e);
        setLoading(false);
      }
    }

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='wrapper'>
      {loading ? <div className='loading_wrapper'>
        <Hearts 
  height="80"
  width="80"
  color="#8051cf"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
      </div> : 
      <div>
        <NavigationMenu setActivePage={setActivePage} />
        <Content
        db={db}
        setActivePage={setActivePage}
        activePage={activePage}
        dates={dates} 
        setDates={setDates} />
      </div>}
    </div>
  );
}

export const firebaseApp = initializeApp(firebaseConfig);

export default App;
