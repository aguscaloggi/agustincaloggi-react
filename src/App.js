import './App.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Router from './app/Router';

const App = () => {
  return (
      <div>
        <Router />
      </div>
  )
}

export default App;
