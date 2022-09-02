import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <body>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer param="43"/>
      </div>
    </body>
  )
}

export default App;
