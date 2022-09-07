import './App.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

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
    </body>
  )
}

export default App;
