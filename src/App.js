import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWorksPlace from './components/HowItWorksPlace/HowItWorksPlace';
import MainPageDescr from './components/MainPageDescr/MainPageDescr';
import TableBlock from './components/TableBlock/TableBlock';
import TopPlace from './components/TopPlace/TopPlace';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <TopPlace/>
        <TableBlock/>
        <HowItWorksPlace/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
