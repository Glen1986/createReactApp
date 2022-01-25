import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className= "App-content">   
        <Link className='Link' to='/search/chile'>gifs de Chile</Link>
        <Link className='Link' to='/search/cannabis'>gifs de cannabis</Link>
        <Link className='Link' to='/search/mar'>gifs de mar</Link>
        <Route component= {ListOfGifs }
        path='/search/:keyword'
      />
     </section>
    </div>
  );
}

export default App;
