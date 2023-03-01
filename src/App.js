import './App.css';
import NavBar from './components/NavBar/NavBar';
import GameInfo from './components/GameInfo/GameInfo'
import ScrollableList from './components/ScrollableList/ScrollableList'

function App() {

  return ( 
    <>
    <NavBar/>
    <div>
      <GameInfo/>
    </div>
    </>
    
  );
}

export default App;
