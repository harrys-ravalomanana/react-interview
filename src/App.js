import logo from './logo.svg';
import './App.scss';
import MoviesList from './components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1> React-interview</h1>
      </header>
        <div className="container">
            <MoviesList/>
        </div>
    </div>
  );
}

export default App;
