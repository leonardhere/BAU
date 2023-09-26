import './App.css';
import Header from './components/Header/Header';
import MainPageDescr from './components/MainPageDescr/MainPageDescr';
import TableBlock from './components/TableBlock/TableBlock';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Header/>
        <MainPageDescr/>
        <TableBlock/>
      </div>
    </div>
  );
}

export default App;
