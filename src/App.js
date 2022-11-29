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
  const [activePage, setActivePage] = useState('all');
  const [dates, setDates] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDates = async (db) => {
    const datesCollection = collection(db,'dates');
    const documents = await getDocs(datesCollection);
    const docData = documents.docs.map(doc => ({
      data: doc.data(),
      id: doc.id
    }));
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
