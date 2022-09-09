import './App.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <body>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer param="43"/>
      </div>
      <div>
        <ItemCount stock={5} initial={1} />
      </div>
      <div className='container__itemlist'>
        <ItemList />
      </div>
    </body>
  )
}

export default App;
