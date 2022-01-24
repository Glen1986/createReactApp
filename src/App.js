import './App.css'
import ListOfGifs from './components/LisOfGifs'
import {useState} from 'react';

function App() {
  const [keyword, setKeyword] = useState('cannabis')

  return (
    <div className="App">
      <section className= "App-content">   
        <button onClick = { () => setKeyword('mapache') }>click</button>
        <ListOfGifs keyword = {keyword}/>
     </section>
    </div>
  );
}

export default App;
