import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className= "App-content">   
        <Link to='/gif/chile'>gifs de Chile</Link>
        <Link to='/gif/cannabis'>gifs de cannabis</Link>
        <Link to='/gif/mar'>gifs de mar</Link>
        <Route component= {ListOfGifs }
        path='/gif/:keyword'
      />
     </section>
    </div>
  );
}

export default App;
